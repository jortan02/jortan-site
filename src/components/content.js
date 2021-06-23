import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, StaticQuery } from "gatsby";

const Content = ({ pageTitle, children }) => {
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

Content.propTypes = {
    pageTitle: PropTypes.string,
};

Content.defaultProps = {
    pageTitle: "",
};

export default Content;
