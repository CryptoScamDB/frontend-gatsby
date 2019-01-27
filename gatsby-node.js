const createNodeHelpers = require("gatsby-node-helpers").default;
const axios = require('axios');

const {
    createNodeFactory,
    generateNodeId,
    generateTypeName
} = createNodeHelpers({
    typePrefix: "Csdb"
})

const DataNode = createNodeFactory('Data');
const DomainNode = createNodeFactory('Domains');

 exports.sourceNodes = async ({ actions: { createNode } }) => {

    const objScams = await axios.get("https://api.cryptoscamdb.org/v1/scams");

    if(objScams.data.success) {
        await Promise.all(
            objScams.data.result.map(async data => {
                if(data.name) {
                    const objResponse = await axios.get(`https://api.cryptoscamdb.org/v1/domain/${data.name}`);
                    if(objResponse.data && objResponse.data.success) {
                        const objLookup = objResponse.data.result;

                        data = objLookup.map(lookup => {
                            const objData = DataNode(lookup, {
                                parent: generateNodeId("DomainNode", data.id)
                            });
                            
                            createNode(objData);

                            return objData;
                        });
                    } else {
                        console.log(`\r\nBUILD ERROR: Cannot get specific scam: ${data.name}`);
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
 }