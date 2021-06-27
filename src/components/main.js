import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import "../styles/main.scss";

const Main = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <main>
            <Helmet
              defaultTitle={data.site.siteMetadata.title}
              titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            >
                <title>
                {pageTitle}
                    {/* {pageTitle ? `${pageTitle} | ` : ""}
                    {data.site.siteMetadata.title} */}
                </title>
            </Helmet>
            {children}
        </main>
    );
};

Main.propTypes = {
    pageTitle: PropTypes.string,
};

Main.defaultProps = {
    pageTitle: "",
};

export default Main;
