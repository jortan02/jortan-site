const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: "collection",
      value: getNode(node.parent).sourceInstanceName,
    });
    if (node.fields.collection === "blog") {
      createNodeField({
        // Individual MDX node
        node,
        // Name of the field you are adding
        name: "slug",
        // Generated value based on filepath with "blog" prefix. you
        // don't need a separating "/" before the value because
        // createFilePath returns a path with the leading "/".
        value: `/blog${value}`,
      })
    } else if (node.fields.collection === "portfolio") {
      createNodeField({
        node,
        name: "slug",
        value: `/portfolio${value}`,
      })
    }
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const blogResult = await graphql(`
    query {
      allMdx(
        filter: { fields: { collection: { eq: "blog" } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (blogResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const blogPosts = blogResult.data.allMdx.edges

  // you'll call `createPage` for each blogResult
  blogPosts.forEach((post, index) => {
    const previous = index === blogPosts.length - 1 ? null : blogPosts[index + 1].node
    const next = index === 0 ? null : blogPosts[index - 1].node

    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: post.node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/blog-post.js`),
      // You can use the values in this context in
      // our page layout component
      context: {
        id: post.node.id,
        previous,
        next,
      },
    })
  })

  // Create blog post list pages
  const blogPostsPerPage = 10;
  const blogNumPages = Math.ceil(blogPosts.length / blogPostsPerPage);

  Array.from({ length: blogNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve('./src/templates/blog.js'),
      context: {
        limit: blogPostsPerPage,
        skip: i * blogPostsPerPage,
        blogNumPages,
        currentPage: i + 1,
      },
    });
  });

  const portfolioResult = await graphql(`
    query {
      allMdx(
        filter: { fields: { collection: { eq: "portfolio" } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (portfolioResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create portfolio post pages.
  const portfolioPosts = portfolioResult.data.allMdx.edges

  // Create portfolio post list pages
  const portfolioPostsPerPage = 10;
  const portfolioNumPages = Math.ceil(portfolioPosts.length / portfolioPostsPerPage);

  Array.from({ length: portfolioNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/portfolio` : `/portfolio/${i + 1}`,
      component: path.resolve('./src/templates/portfolio.js'),
      context: {
        limit: portfolioPostsPerPage,
        skip: i * portfolioPostsPerPage,
        portfolioNumPages,
        currentPage: i + 1,
      },
    });
  });
}
