const createNodeHelpers = require("gatsby-node-helpers").default;
const axios = require('axios');

const {
    createNodeFactory,
    generateNodeId,
    generateTypeName
} = createNodeHelpers({
    typePrefix: "TestData"
})

const IssueNode = createNodeFactory('TestIssue');
const TestNode = createNodeFactory('TestNode');

 exports.sourceNodes = async ({ actions: { createNode } }) => {

    const testData = [
        {
            "id": 0,
            "name": "Harry",
            "domain": "buterinpromo.cn",
            "likes": [
                "cocaine",
                "hookers",
                "blackjack"
            ]
        },
        {
            "id": 1,
            "name": "Santa",
            "domain": "dexchainlaunchpad.com",
            "likes": [
                "elves",
                "pussy",
                "gatorade"
            ]
        },
        {
            "id": 2,
            "name": "Easter Bunny",
            "likes": [
                "eggs"
            ]
        },
    ];

    await Promise.all(testData.map(async data => {
        if(data.domain) {
            const objResponse = await axios.get(`https://api.cryptoscamdb.org/v1/domain/${data.domain}`);

            // @todo - error handling

            if(objResponse.data && objResponse.data.result) {
                const issues = objResponse.data.result;
                // data.CsdbEntry = CsdbEntry;

                data.issues = issues.map(issue => {
                    const issueNode = IssueNode(issue, {
                        parent: generateNodeId("TestNode", data.id)
                    });
                    
                    createNode(issueNode);

                    return issueNode;
                });
            }
         }

         const testNode = TestNode(data);
         createNode(testNode);

         

     }));

     return;
 }