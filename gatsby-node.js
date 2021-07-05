const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
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
            });
        } else if (node.fields.collection === "portfolio") {
            createNodeField({
                node,
                name: "slug",
                value: `/portfolio${value}`,
            });
        }
    }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
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
    `);

    if (blogResult.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
    }

    // Create blog post pages.
    const blogPosts = blogResult.data.allMdx.edges;

    createListandPages(
        "blog",
        blogPosts,
        "./src/templates/blog.js",
        "./src/templates/blog-post.js",
        actions
    );

    const portfolioResult = await graphql(`
        query {
            allMdx(
                filter: { fields: { collection: { eq: "portfolio" } } }
                sort: { fields: [frontmatter___order], order: DESC }
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
    `);

    if (portfolioResult.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
    }

    // Create portfolio post pages.
    const portfolioPosts = portfolioResult.data.allMdx.edges;

    createListandPages(
        "portfolio",
        portfolioPosts,
        "./src/templates/portfolio.js",
        "./src/templates/blog-post.js",
        actions
    );
};

function createListandPages(name, posts, listTemplate, postTemplate, actions) {
    // Destructure the createPage function from the actions object
    const { createPage } = actions;

    // you'll call `createPage` for each blogResult
    posts.forEach((post, index) => {
        const previous =
            index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === 0 ? null : posts[index - 1].node;

        createPage({
            // This is the slug you created before
            // (or `node.frontmatter.slug`)
            path: post.node.fields.slug,
            // This component will wrap our MDX content
            component: path.resolve(postTemplate),
            // You can use the values in this context in
            // our page layout component
            context: {
                id: post.node.id,
                previous,
                next,
            },
        });
    });

    // Create post list pages
    const postsPerPage = 10;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/${name}` : `/${name}/${i + 1}`,
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
