/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);

exports.onPostBuild = ({
  reporter
}) => {
  reporter.info(`Your Gatsby site has been built!`);
};

exports.createPages = ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions;
  return graphql(`
query loadPagesQuery {
  allContentfulPerson {
    edges {
      node {
        slug
      }
    }
  }
}
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    console.log(result);
    return result.data.allContentfulPerson.edges.forEach((edge) => {
      createPage({
        // Path for this page — required
        path: `/person/${edge.node.slug}`,
        component: path.resolve('./src/components/PersonPage.tsx'),
        context: {
          id: edge.node.id,
          slug: edge.node.slug,
        },
      });

    })
  });
};
