const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `/blog${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
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

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges

  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/blog-post.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}

// https://www.gatsbyjs.com/docs/adding-pagination/

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions

//   const result = await graphql(
//     `
//       {
//         allMdx(
//           sort: { fields: [frontmatter___date], order: DESC }
//           limit: 1000
//         ) {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `
//   )

//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   // ...

//   // Create blog-list pages
//   const posts = result.data.allMdx.edges
//   const postsPerPage = 6
//   const numPages = Math.ceil(posts.length / postsPerPage)
//   Array.from({ length: numPages }).forEach((_, i) => {
//     createPage({
//       path: i === 0 ? `/blog` : `/blog/${i + 1}`,
//       component: path.resolve("./src/components/blog-list.js"),
//       context: {
//         limit: postsPerPage,
//         skip: i * postsPerPage,
//         numPages,
//         currentPage: i + 1,
//       },
//     })
//   })
// }