const CSDB_API_ENDPOINT = "https://api.cryptoscamdb.org/v1";
const DEVELOPMENT = true; // Will limit scam lookups to 100 instead of everything

const path = require(`path`)
const createNodeHelpers = require("gatsby-node-helpers").default;
const axios = require('axios');

const {
    createNodeFactory,
    generateNodeId,
    generateTypeName
} = createNodeHelpers({
    typePrefix: "Csdb"
})

const DomainNode = createNodeFactory('Domains');

exports.sourceNodes = async ({ actions: { createNode } }) => 
{
    const objScams = await axios.get(`${CSDB_API_ENDPOINT}/scams`);

    const objBuildStats = {
        "success": 0,
        "fail": 0
    };

    if(objScams.status === 200 && objScams.data.success) {

        let arrResults = objScams.data.result;
        if(DEVELOPMENT) {
            console.log("\r\n\r\nDEVELOPMENT MODE SO ONLY GETTING THE MOST RECENT 100 RECORDS\r\n\r\n");
            arrResults = objScams.data.result.reverse().slice(1,100);
        }

        await Promise.all(
            arrResults.map(async data => {
                if(data.name) {
                    const objResponse = await axios.get(`${CSDB_API_ENDPOINT}/domain/${data.name.toLowerCase()}`);
                    if(objResponse.status === 200 && objResponse.data && objResponse.data.success) {
                        objBuildStats.success += 1;
                        createNode(DomainNode(objResponse.data.result));
                    } else {
                        console.log(`\r\nBUILD ERROR: Cannot get specific scam: ${data.name} -- HTTP: ${objResponse.status}`);
                        objBuildStats.fail += 1;
                    }
                }

                const objDomainNode = DomainNode(data);
                createNode(objDomainNode);
            })
        );
    } else {
        console.log("\r\nBUILD ERROR: Cannot get scams");
    } 
    console.log(`-------\r\nBUILD STATS\r\n-------\r\nSuccess:${objBuildStats.success}\r\nFail:${objBuildStats.fail}\r\n\r.`)
}

exports.createPages = ({ graphql, actions} ) => 
{
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
        resolve(
            graphql(`
                {
                    allCsdbDomains {
                        totalCount
                        edges {
                            node {
                                csdbId
                            }
                        } 
                    }
                }
            `).then(result => {
                result.data.allCsdbDomains.edges.forEach(({ node }) => {
                    console.log(`\tCreating page /domain/${node.csdbId}`)
                    createPage({
                        path: `/domain/${node.csdbId}`,
                        component: path.resolve(`./src/pages/domain.js`),
                        context: {
                            slug: node.csdbId
                        }
                    })
                })
            })
        )
    })
}