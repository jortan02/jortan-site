import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import Footer from "../components/footer";
import { graphql, useStaticQuery } from "gatsby";
import "../styles/layout.scss";

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    {
      site {
        id
        siteMetadata {
          title
          description
          menuLinks {
              link
              name
          }
        }
      }
    }
  `)

    return (
        <div className="site-container">
            <Helmet>
                <title>{data.site.siteMetadata.title}</title>
                <meta name="description" content={data.site.siteMetadata.description} />
            </Helmet>
            <Header menuLinks={data.site.siteMetadata.menuLinks} />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
