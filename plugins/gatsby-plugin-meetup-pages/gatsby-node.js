const path = require('path');

exports.createPages = async ({ actions: { createPage }, graphql, reporter }) => {
  const result = await graphql(`
    {
      allEventsCsv {
        nodes {
          id
          meetupid
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  /**
   * Create meetup pages
   */
  result.data.allEventsCsv.nodes.forEach(({ id, meetupid }) => {
    createPage({
      path: path.join('meetup', meetupid),
      component: path.resolve('./src/templates/MeetupPage.js'),
      context: { id },
    });
  });
};
