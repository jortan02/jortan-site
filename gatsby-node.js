const path = require("path");

// https://www.gatsbyjs.com/docs/mdx/programmatically-creating-pages/
// https://www.gatsbyjs.com/docs/adding-pagination/
// https://github.com/strapi/gatsby-source-strapi/issues/89

// TODO: Create a tag system for blog and portfolio categories

exports.onCreateNode = ({
    node,
    actions,
    createNodeId,
    createContentDigest,
}) => {
    const type = node.internal.type;
    if (
        type === "StrapiBlogPosts" ||
        type === "StrapiPortfolioProjects" ||
        type === "StrapiResume"
    ) {
        createContentNode(node, actions, createNodeId, createContentDigest);
    }
    if (type === "StrapiBlogPosts") {
        actions.createNodeField({
            name: "absoluteSlug",
            node,
            value: `/blog/${node.slug}`,
        });
    } else if (type === "StrapiPortfolioProjects") {
        actions.createNodeField({
            name: "absoluteSlug",
            node,
            value: `/portfolio/${node.slug}`,
        });
    }
};

/**
 * Helper method that creates the markdown content node for the given node
 * @param {*} node
 * @param {*} actions
 * @param {*} createNodeId
 * @param {*} createContentDigest
 */
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
        },
    };
    actions.createNode(newNode);
    actions.createParentChildLink({
        parent: node,
        child: newNode,
    });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
    const result = await graphql(`
        {
            allStrapiPortfolioProjects {
                edges {
                    node {
                        fields {
                            absoluteSlug
                        }
                        id
                    }
                }
            }
            allStrapiBlogPosts {
                edges {
                    node {
                        fields {
                            absoluteSlug
                        }
                        id
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
        return;
    }

    // Create blog post pages.
    const blogPosts = result.data.allStrapiBlogPosts.edges;

    createListandPages(
        "blog",
        blogPosts,
        10,
        "./src/templates/blog.js",
        "./src/templates/blog-post.js",
        actions
    );

    // Create portfolio post pages.
    const portfolioPosts = result.data.allStrapiPortfolioProjects.edges;

    createListandPages(
        "portfolio",
        portfolioPosts,
        10,
        "./src/templates/portfolio.js",
        "./src/templates/portfolio-project.js",
        actions
    );
};

/**
 * Helper method that creates the pagination list and pages based on the given posts query snippet
 * @param {*} type
 * @param {*} posts
 * @param {*} postsPerPage
 * @param {*} listTemplate
 * @param {*} postTemplate
 * @param {*} actions
 */
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
            path: post.node.fields.absoluteSlug,
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
