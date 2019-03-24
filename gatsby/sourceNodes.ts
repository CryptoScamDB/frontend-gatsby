import { API_ENDPOINT } from './config';
const { NODE_ENV } = process.env;

const createNodeHelpers = require('gatsby-node-helpers').default;
const axios = require('axios');

const { createNodeFactory, generateNodeId, generateTypeName } = createNodeHelpers({
  typePrefix: 'Csdb'
});

const ScamDomainNode = createNodeFactory('ScamDomains');
const FeaturedDomainNode = createNodeFactory('FeaturedDomain');
const StatsNode = createNodeFactory('Stats');

export default async ({ actions: { createNode } }: any) => {
  /***************************************************************
   ********************** G E T   S C A M S **********************
   ***************************************************************/
  console.log(`\r\n\r\n[*] Fetching domains -- ${API_ENDPOINT}/scams`);
  const objScams = await axios.get(`${API_ENDPOINT}/scams`);

  const objBuildStats = {
    success: 0,
    fail: 0
  };

  if (objScams.status === 200 && objScams.data.success) {
    let arrResults = objScams.data.result;

    if (NODE_ENV === 'development') {
      console.log(`\r\n\t[+] Development mode so only getting the most recent 250 records`);
      arrResults = objScams.data.result.reverse().slice(1, 250);
    }

    await Promise.all(
      arrResults.map(async (data: any) => {
        if (data.name) {
          const objResponse = await axios.get(`${API_ENDPOINT}/domain/${data.name.toLowerCase()}`);
          if (objResponse.status === 200 && objResponse.data && objResponse.data.success) {
            objBuildStats.success += 1;
            createNode(ScamDomainNode(objResponse.data.result[0]));
          } else {
            console.log(`\r\n\t[-] Build error - cannot get domain: ${data.name}`);
            objBuildStats.fail += 1;
          }
        }
      })
    );
  } else {
    console.log(`\r\n\t[-] Build error - cannot get ${API_ENDPOINT}/scams`);
  }
  console.log(`\r\n\t[+] Successful build of scams: ${JSON.stringify(objBuildStats)}`);

  /***************************************************************
   ******************* G E T   V E R I F E D *********************
   ***************************************************************/
  console.log(`\r\n\r\n[+] Fetching CSDB verified/featured`);
  const objFeatured = await axios.get(`${API_ENDPOINT}/featured`);

  if (objFeatured.status === 200 && objFeatured.data.success) {
    const arrResults = objFeatured.data.result;
    await Promise.all(
      arrResults.map(async (data: any) => {
        if (data.url) {
          const strDomain = data.url.replace(/https?\:\/\//, '');
          const objResponse = await axios.get(`${API_ENDPOINT}/domain/${strDomain.toLowerCase()}`);
          if (objResponse.status === 200 && objResponse.data && objResponse.data.success) {
            objBuildStats.success += 1;

            //Add the CSDB ID to it - hack until included in the GET /v1/domain/<domain>
            objResponse.data.result[0].id = data.name;
            // Normalise the record @todo make this much prettier, maybe using a data model?
            if (!objResponse.data.result[0].hasOwnProperty('description')) {
              objResponse.data.result[0].description = '';
            }
            createNode(FeaturedDomainNode(objResponse.data.result[0]));
            console.log(objResponse.data.result[0]);
          } else {
            console.log(`\r\n\t[-] Build error - cannot get domain: ${strDomain}`);
            objBuildStats.fail += 1;
          }
        }
      })
    );
    console.log(`\r\n\t[+] Verified domains node created`);
  } else {
    console.log(`\r\n\t[-] Build error - cannot get ${API_ENDPOINT}/featured`);
  }

  /***************************************************************
   ********************** G E T   S T A T S **********************
   ***************************************************************/
  console.log(`\r\n\r\n[+] Fetching CSDB stats`);
  const objStats = await axios.get(`${API_ENDPOINT}/stats`);

  if (objStats.status === 200 && objStats.data.success) {
    const arrResults = objStats.data.result;
    createNode(StatsNode(arrResults));
    console.log(`\r\n\t[+] Stats node created`);
  } else {
    console.log(`\r\n\t[-] Build error - cannot get ${API_ENDPOINT}/stats`);
  }
};
