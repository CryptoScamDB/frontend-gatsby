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

exports.sourceNodes = async ({ actions: { createNode } }) => {

const objScams = await axios.get("https://api.cryptoscamdb.org/v1/scams");

const objBuildStats = {
    "success": 0,
    "fail": 0
};

if(objScams.status === 200 && objScams.data.success) {
    await Promise.all(
        objScams.data.result.map(async data => {
            if(data.name) {
                const objResponse = await axios.get(`https://api.cryptoscamdb.org/v1/domain/${data.name}`);
                if(objResponse.status === 200 && objResponse.data && objResponse.data.success) {
                    objBuildStats.success += 1;
                    createNode(DomainNode(objLookup));
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
    console.log(objScams);
} 

console.log(`-------\r\nBUILD STATS\r\n-------\r\nSuccess:${objBuildStats.success}\r\nFail:${objBuildStats.fail}\r\n\r\nFinished.`)
}