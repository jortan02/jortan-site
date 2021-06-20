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
                <div className="content-container">
                    <Helmet>
                        <title>
                            {pageTitle}
                            {pageTitle ? " | " : ""}
                            {data.site.siteMetadata.title}
                        </title>
                    </Helmet>
                    {children}
                </div>
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
