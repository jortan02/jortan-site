import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import Footer from "../components/footer";
import { graphql, StaticQuery } from "gatsby";
import "../styles/layout.scss";

const Layout = ({ children }) => {
    return (
        <StaticQuery
            query={graphql`
                query siteDefaultQuery {
                    site {
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
            `}
            render={(data) => (
                <div className="site-container">
                    <Helmet>
                        <title>{data.site.siteMetadata.title}</title>
                        <meta name="description" content={data.site.siteMetadata.description} />
                    </Helmet>
                    <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
                    {children}
                    <Footer />
                </div>
            )}
        />
    );
};

export default Layout;
