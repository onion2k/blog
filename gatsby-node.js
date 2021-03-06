const path = require('path');
const postsPerPage = 8;

exports.createPages = ({ boundActionCreators, graphql }) => {

  const { createPage } = boundActionCreators;

  return graphql(`{
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date
            path
            tags
            title
            bg
            bgLink
            bgTitle
            bgAuthor
          }
        }
      }
    }
  }`).then(result => generateContent(createPage, result));

  function generateContent(createPage, graphqlResults) {

    if (graphqlResults.errors) {
      return Promise.reject(graphqlResults.errors)
    }

    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

    /**
     * Separate published posts and and drafts
     */
    const posts = graphqlResults.data.allMarkdownRemark.edges;
    const published = posts;

    createTagPages(createPage, published);
    createPagination(createPage, published, `/archive`);

    /**
     * Create pages for each markdown file.
     */
    posts.forEach(({ node }, index) => {
      const prev = index === 0 ? false : posts[index - 1].node;
      const next = index === posts.length - 1 ? false : posts[index + 1].node;
      createPage({
        path: node.frontmatter.path,
        refPath: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          prev,
          next
        }
      });
    });

    return [];

  }

  /**
   * Create pages for tags
   */
  function createTagPages (createPage, edges) {

    const tagTemplate = path.resolve(`src/templates/blog-tags.js`);
    const posts = {};
    
    edges
      .forEach(({ node }) => {
        if (node.frontmatter.tags) {
          node.frontmatter.tags.split(',')
            .forEach(tag => {
              if (!posts[tag]) {
                posts[tag] = [];
              }
              posts[tag].push(node);
            });
        }
      });

    Object.keys(posts)
      .forEach(tagName => {

        const pageSize = postsPerPage;
        const pagesSum = Math.ceil(posts[tagName].length / pageSize);
        
        for (let page = 0; page < pagesSum; page++) {
          createPage({
            path: page === 0 ? `/tag/${tagName}` : `/tag/${tagName}/page/${page+1}`,
            component: tagTemplate,
            context: {
              posts: paginate(posts[tagName], pageSize, page),
              tag: tagName,
              pagesSum,
              page
            }
          })
        }
      });
  };

  /**
   * Create pagination for posts
   */
  function createPagination (createPage, edges, pathPrefix) {

    const pageTemplate = path.resolve(`src/templates/blog-pages.js`);
    
    const pageSize = postsPerPage;
    const pagesSum = Math.ceil(edges.length / pageSize);
    var displayPage;

    for(let page = 0; page < pagesSum; page++) {
      displayPage = page+1;
      createPage({
        path: `${pathPrefix}/${displayPage}`,
        component: pageTemplate,
        context: {
          posts: paginate(edges, pageSize, page).map(({node}) => node),
          page,
          pagesSum,
          prevPath: (displayPage - 1) > 1 ? `${pathPrefix}/${displayPage - 1}` : null,
          nextPath: (displayPage + 1) < (pagesSum+1) ? `${pathPrefix}/${displayPage+1}` : null,
        }
      })
    }
  };

  function paginate(array, pageSize, pageNumber) {
    //--page_number; // because pages logically start with 1, but technically with 0
    return array.slice(0).slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
  }

};