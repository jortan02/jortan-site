import React from "react";
import { Helmet } from "react-helmet";
import Header from "./header";
import Footer from "./footer";
import { graphql, useStaticQuery } from "gatsby";
import "../styles/layout.scss";

const Layout = ({ pageTitle, children }) => {
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
      <Helmet
        defaultTitle={data.site.siteMetadata.title}
        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      >
        <title>{pageTitle}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <Header menuLinks={data.site.siteMetadata.menuLinks} />
        <div className="main-container">
          {children}
        </div>
      <Footer />
    </div>
  );
};

export default Layout;
