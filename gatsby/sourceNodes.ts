import { API_ENDPOINT } from './config';
const { NODE_ENV } = process.env || 'development';

const createNodeHelpers = require('gatsby-node-helpers').default;
const Bottleneck = require('bottleneck');
const axios = require('axios');

const { createNodeFactory, generateNodeId, generateTypeName } = createNodeHelpers({
  typePrefix: 'Csdb'
});

const limiter = new Bottleneck({
  maxConcurrent: 100,
  minTime: 100
});

const instance = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 5000,
  validateStatus: () => true
});
const get = limiter.wrap(instance.get);

const ScamDomainNode = createNodeFactory('ScamDomains');
const FeaturedDomainNode = createNodeFactory('FeaturedDomain');
const StatsNode = createNodeFactory('Stats');

export default async ({ actions: { createNode } }: any) => {
  /***************************************************************
   ********************** G E T   S C A M S **********************
   ***************************************************************/
  const strScamApiEndpoint = `${API_ENDPOINT}/scams`;
  console.log(`\r\n\r\n[*] Fetching domains -- ${strScamApiEndpoint}`);
  const objScams = await axios.get(`${strScamApiEndpoint}`);

  console.log(`\r\n\r\n[*] Fetching domains -- ${API_ENDPOINT}/featured`);
  const objFeatured = await axios.get(`${API_ENDPOINT}/featured`);
  console.log(`\r\n\r\n[*] Fetching domains -- ${API_ENDPOINT}/stats`);
  const objStats = await axios.get(`${API_ENDPOINT}/stats`);

  const objBuildStats = {
    success: 0,
    fail: 0
  };

  if (objScams.status === 200 && objScams.data.success) {
    let arrResults = objScams.data.result;

    if (NODE_ENV === 'development') {
      console.log(`\r\n\t[+] Development mode so only getting the most recent 250 records`);
      arrResults = objScams.data.result.reverse().slice(0, 250);
    }

    await Promise.all(
      arrResults.map(async (data: any) => {
        if (data.name) {
          const objResponse = await get(`/domain/${data.name.toLowerCase()}`).catch(() => {});
          if (
            objResponse &&
            objResponse.status === 200 &&
            objResponse.data &&
            objResponse.data.success
          ) {
            objBuildStats.success += 1;

            objResponse.data.result[0].labelled_addresses = [];
            if (Object.keys(objResponse.data.result[0].addresses).length > 0) {
              let labelledAddresses: string[] = [''];
              Object.keys(objResponse.data.result[0].addresses).forEach((ticker: string) => {
                objResponse.data.result[0].addresses[ticker].map((address: string) => {
                  const res: string = [ticker, address].join(':');
                  labelledAddresses.push(res);
                });
              });
              objResponse.data.result[0].labelled_addresses = labelledAddresses;

              // Flatten the addresses arrays - this is temp logic
              // @todo - create some relationship between this node and an addresses node
              const objAddressesTmp = objResponse.data.result[0].addresses;
              objResponse.data.result[0].addresses = [];
              Object.keys(objAddressesTmp).forEach(strKey => {
                objAddressesTmp[strKey].forEach(addr => {
                  objResponse.data.result[0].addresses.push(addr);
                });
              });
            }

            // Adding some data sanity checks
            // @todo - port logic into a model?
            objResponse.data.result[0].ip =
              objResponse.data.result[0].ip && objResponse.data.result[0].ip !== null
                ? objResponse.data.result[0].ip
                : '';
            objResponse.data.result[0].ips =
              objResponse.data.result[0].ips && objResponse.data.result[0].ips !== null
                ? objResponse.data.result[0].ips
                : [''];
            objResponse.data.result[0].status =
              objResponse.data.result[0].status && objResponse.data.result[0].status !== null
                ? objResponse.data.result[0].status
                : '';
            objResponse.data.result[0].statusCode =
              objResponse.data.result[0].statusCode &&
              objResponse.data.result[0].statusCode !== null
                ? objResponse.data.result[0].statusCode
                : '';
            objResponse.data.result[0].abusereport =
              objResponse.data.result[0].abusereport &&
              objResponse.data.result[0].abusereport !== null
                ? objResponse.data.result[0].abusereport
                : '';
            objResponse.data.result[0].nameservers =
              objResponse.data.result[0].nameservers &&
              objResponse.data.result[0].nameservers.length > 0
                ? objResponse.data.result[0].nameservers
                : [''];
            objResponse.data.result[0].lookups =
              objResponse.data.result[0].lookups && objResponse.data.result[0].lookups.length > 0
                ? objResponse.data.result[0].lookups
                : [''];

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

  if (objFeatured.status === 200 && objFeatured.data.success) {
    const arrResults = objFeatured.data.result;
    await Promise.all(
      arrResults.map(async (data: any) => {
        if (data.url) {
          const strDomain = data.name.replace(/https?\:\/\//, '');
          const objResponse = await get(`/domain/${strDomain.toLowerCase()}`).catch(() => {});
          if (
            objResponse &&
            objResponse.status === 200 &&
            objResponse.data &&
            objResponse.data.success
          ) {
            objBuildStats.success += 1;

            objResponse.data.result[0].labelled_addresses = [];
            if (Object.keys(objResponse.data.result[0].addresses).length > 0) {
              let labelledAddresses: string[] = [''];
              Object.keys(objResponse.data.result[0].addresses).forEach((ticker: string) => {
                objResponse.data.result[0].addresses[ticker].map((address: string) => {
                  const res: string = [ticker, address].join(':');
                  labelledAddresses.push(res);
                });
              });
              objResponse.data.result[0].labelled_addresses = labelledAddresses;

              // Flatten the addresses arrays - this is temp logic
              // @todo - create some relationship between this node and an addresses node
              const objAddressesTmp = objResponse.data.result[0].addresses;
              objResponse.data.result[0].addresses = [];
              Object.keys(objAddressesTmp).forEach(strKey => {
                objAddressesTmp[strKey].forEach(addr => {
                  objResponse.data.result[0].addresses.push(addr);
                });
              });
            }

            // Adding some data sanity checks
            // @todo - port logic into a model?
            objResponse.data.result[0].ip =
              objResponse.data.result[0].ip && objResponse.data.result[0].ip !== null
                ? objResponse.data.result[0].ip
                : '';
            objResponse.data.result[0].ips =
              objResponse.data.result[0].ips && objResponse.data.result[0].ips !== null
                ? objResponse.data.result[0].ips
                : [''];
            objResponse.data.result[0].status =
              objResponse.data.result[0].status && objResponse.data.result[0].status !== null
                ? objResponse.data.result[0].status
                : '';
            objResponse.data.result[0].statusCode =
              objResponse.data.result[0].statusCode &&
              objResponse.data.result[0].statusCode !== null
                ? objResponse.data.result[0].statusCode
                : '';

            //Add the CSDB ID to it - hack until included in the GET /v1/domain/<domain>
            objResponse.data.result[0].id = data.name;
            // Normalise the record @todo make this much prettier, maybe using a data model?
            if (!objResponse.data.result[0].hasOwnProperty('description')) {
              objResponse.data.result[0].description = '';
            }

            createNode(FeaturedDomainNode(objResponse.data.result[0]));
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

  if (objStats.status === 200 && objStats.data.success) {
    const arrResults = objStats.data.result;
    createNode(StatsNode(arrResults));
    console.log(`\r\n\t[+] Stats node created`);
  } else {
    console.log(`\r\n\t[-] Build error - cannot get ${API_ENDPOINT}/stats`);
  }
};
