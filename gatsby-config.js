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
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog-posts`,
                path: `${__dirname}/blog-posts`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `portfolio-items`,
                path: `${__dirname}/portfolio-items`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
            //   name: `GatsbyJS`,
            //   short_name: `GatsbyJS`,
            //   start_url: `/`,
            //   background_color: `#f7f0eb`,
            //   theme_color: `#a2466c`,
            //   display: `standalone`,
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
