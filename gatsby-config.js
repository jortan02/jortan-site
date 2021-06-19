module.exports = {
    siteMetadata: {
        title: "Jordan Tan's Site",
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-image",
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        // {
        //   resolve: "gatsby-source-filesystem",
        //   options: {
        //     name: "images",
        //     path: "./src/images/",
        //   },
        //   __key: "images",
        // },
        // {
        //   resolve: "gatsby-source-filesystem",
        //   options: {
        //     name: "pages",
        //     path: "./src/pages/",
        //   },
        //   __key: "pages",
        // },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog-posts`,
                path: `${__dirname}/blog-posts`,
            },
        },
    ],
    flags: {
        DEV_SSR: false,
    },
};
