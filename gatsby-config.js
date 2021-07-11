require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        menuLinks: [
            {
                name: "Home",
                link: "/",
            },
            {
                name: "Resume",
                link: "/resume",
            },
            {
                name: "Blog",
                link: "/blog",
            },
            {
                name: "Portfolio",
                link: "/portfolio",
            },
            {
                name: "Contact",
                link: "/contact",
            },
        ],
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: "gatsby-source-strapi",
            options: {
                apiURL: process.env.API_URL || "http://localhost:1337",
                collectionTypes: ["blog-posts", "portfolio-projects"],
                singleTypes: ["global"],
                queryLimit: 1000,
            },
        },
        "gatsby-remark-images",
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                ],
                defaultLayouts: {
                    default: require.resolve("./src/components/layout.js"),
                },
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "./src/images/logos/jt-logo-bg.svg",
                cache_busting_mode: "none",
            },
        },
        {
            resolve: "gatsby-plugin-offline",
            options: {
                workboxConfig: {
                    globPatterns: ["**/src/images/logos/*.png"],
                },
            },
        },
        "gatsby-plugin-fontawesome-css",
    ],
    flags: {
        DEV_SSR: false,
    },
};
