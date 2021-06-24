import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, StaticQuery } from "gatsby";

const Main = ({ pageTitle, children }) => {
    return (
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }
            `}
            render={(data) => (
                <main>
                    <Helmet>
                        <title>
                            {pageTitle ? `${pageTitle} | ` : ""}
                            {data.site.siteMetadata.title}
                        </title>
                    </Helmet>
                    {children}
                </main>
            )}
        />
    );
};

Main.propTypes = {
    pageTitle: PropTypes.string,
};

Main.defaultProps = {
    pageTitle: "",
};

export default Main;
