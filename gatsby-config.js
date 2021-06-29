module.exports = {
    siteMetadata: {
        title: "Jordan Tan",
        description: "Jordan Tan's Personal Site | Resume | Blog | Portfolio",
        phoneNumber: "435-823-0976",
        emailAddress: "jortan2002@gmail.com",
        menuLinks:[
            {
                name: "Home",
                link: "/"
            },
            {
                name: "Resume",
                link: "/resume"
            },
            {
                name: "Blog",
                link: "/blog"
            },
            {
                name: "Portfolio",
                link: "/portfolio"
            },
            {
                name: "Contact",
                link: "/contact"
            },
        ]
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
                name: `blog`,
                path: `${__dirname}/src/pages/blog`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `portfolio`,
                path: `${__dirname}/src/pages/portfolio`,
            },
        },
        {
            resolve: "gatsby-plugin-page-creator",
            options: {
              path: `${__dirname}/src/pages/blog`,
            },
        },
        {
            resolve: "gatsby-plugin-page-creator",
            options: {
              path: `${__dirname}/src/pages/portfolio`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
              defaultLayouts: {
                default: require.resolve("./src/templates/blog-post.js"),
              },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              icon: `src/images/logos/jt-logo-bg.svg`,
              cache_busting_mode: 'none',
            },
          },
          {
            resolve: 'gatsby-plugin-offline',
            options: {
               workboxConfig: {
                  globPatterns: ['**/src/images/*']
               }
            }
         },
    ],
    flags: {
        DEV_SSR: false,
    },
};
