require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

const globalQuery = {
    // Populate media and relations
    // Make sure to not specify the fields key so the api always returns the updatedAt
    populate: {
        contactInformation: {
            populate: {
                emailAddress: "*",
                github: "*",
                id: "*",
                linkedin: "*",
                phoneNumber: "*",
                role: "*",
                qrCode: "*",
                profilePicture: "*",
            },
        },
        defaultSeo: {
            populate: {
                metaTitle: "*",
                metaDescription: "*",
                shareImage: "*",
            },
        },
    },
};

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
            {
                name: "Privacy",
                link: "/privacy",
            },
        ],
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-gatsby-cloud`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-strapi`,
            options: {
                apiURL: process.env.STRAPI_API_URL,
                accessToken: process.env.STRAPI_TOKEN,
                collectionTypes: [
                    {
                        singularName: "blog-post",
                        queryParams: {
                            publicationState:
                                process.env.GATSBY_IS_PREVIEW === "true"
                                    ? "preview"
                                    : "live",
                        },
                    },
                    {
                        singularName: "portfolio-project",
                        queryParams: {
                            publicationState:
                                process.env.GATSBY_IS_PREVIEW === "true"
                                    ? "preview"
                                    : "live",
                        },
                    },
                ],
                singleTypes: [
                    { singularName: "global", queryParams: globalQuery },
                    "resume",
                ],
            },
        },
        `gatsby-remark-images`,
        {
            resolve: `gatsby-plugin-mdx`,
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
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: "./src/images/logos/jt-logo-bg.svg",
                cache_busting_mode: "none",
            },
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                workboxConfig: {
                    globPatterns: ["**/*(*.png|*.jpg|*.svg)"],
                },
            },
        },
        `gatsby-plugin-fontawesome-css`,
    ],
    flags: {
        DEV_SSR: false,
    },
};
