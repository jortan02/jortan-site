import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

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
            <Helmet>
                <title>
                    {pageTitle ? `${pageTitle} | ` : ""}
                    {data.site.siteMetadata.title}
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
