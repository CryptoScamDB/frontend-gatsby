const path = require('path');

export default async ({ graphql, actions }: any) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allCsdbScamDomains {
        totalCount
        edges {
          node {
            csdbId
          }
        }
      }
    }
  `);
  result.data.allCsdbScamDomains.edges.forEach(({ node }: any) => {
    console.log(`\tCreating page /domain/${node.csdbId}`);
    createPage({
      path: `/domain/${node.csdbId}`,
      component: path.resolve(`./src/pages/domain.tsx`),
      context: {
        slug: node.csdbId
      }
    });
  });
};
