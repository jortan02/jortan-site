const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

// https://www.gatsbyjs.com/docs/mdx/programmatically-creating-pages/
// https://www.gatsbyjs.com/docs/adding-pagination/
// https://github.com/strapi/gatsby-source-strapi/issues/89

// TODO: Create a tag system for blog and portfolio categories

module.exports.onCreateNode = async ({ node, actions, createNodeId, createContentDigest }) => {
    if (node.internal.type === "StrapiBlogPosts" || node.internal.type === "StrapiPortfolioProjects") {
        createContentNode(node, actions, createNodeId, createContentDigest);
    }
};

function createContentNode(node, actions, createNodeId, createContentDigest) {
    const newNode = {
        id: createNodeId(`${node.internal.type}Content-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
            content: node.content || " ",
            type: `${node.internal.type}Content`,
            mediaType: "text/markdown",
            contentDigest: createContentDigest(node.content),
            // contentDigest: crypto
            //     .createHash("md5")
            //     .update(node.content || " ")
            //     .digest("hex"),
        },
    };
    actions.createNode(newNode);
    actions.createParentChildLink({
        parent: node,
        child: newNode,
    });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
    // Blog:
    const blogResult = await graphql(`
        query {
            allStrapiBlogPosts(
                sort: { fields: date, order: DESC }
                limit: 1000
                ) {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `);

    if (blogResult.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
    }

    // Create blog post pages.
    const blogPosts = blogResult.data.allStrapiBlogPosts.edges;

    createListandPages(
        "blog",
        blogPosts,
        10,
        "./src/templates/blog.js",
        "./src/templates/blog-post.js",
        actions
    );

    // Portfolio:
    const portfolioResult = await graphql(`
        query {
            allStrapiPortfolioProjects(
                sort: { fields: order, order: DESC }
                limit: 1000
                ) {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `);

    if (portfolioResult.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
    }

    // Create portfolio post pages.
    const portfolioPosts = portfolioResult.data.allStrapiPortfolioProjects.edges;

    createListandPages(
        "portfolio",
        portfolioPosts,
        10,
        "./src/templates/portfolio.js",
        "./src/templates/portfolio-project.js",
        actions
    );
};

function createListandPages(
    type,
    posts,
    postsPerPage,
    listTemplate,
    postTemplate,
    actions
) {
    // Destructure the createPage function from the actions object
    const { createPage } = actions;

    // you'll call `createPage` for each blogResult
    posts.forEach((post, index) => {

        createPage({
            // This is the slug you created before
            // (or `node.frontmatter.slug`)
            path: `/${type}/${post.node.slug}`,
            // This component will wrap our MDX content
            component: path.resolve(postTemplate),
            // You can use the values in this context in
            // our page layout component
            context: {
                id: post.node.id,
            },
        });
    });

    // Create post list pages
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/${type}` : `/${type}/${i + 1}`,
            component: path.resolve(listTemplate),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            },
        });
    });
}
