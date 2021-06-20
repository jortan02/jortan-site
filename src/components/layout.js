// import React from "react";
// import Header from "../components/header";
// import Footer from "../components/footer";

// const Layout = ({ children }) => {
//     return (
//         <main className="main-container">
//             <Header />
//             {children}
//             <Footer />
//         </main>
//     )
// };
// export default Layout;

import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import Footer from "../components/footer";
import { graphql, StaticQuery } from "gatsby";

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
                <main className="main-container">
                    <Helmet>
                        <title>{data.site.siteMetadata.title}</title>
                        <meta name="description" content={data.site.siteMetadata.description} />
                    </Helmet>
                    <Header />
                        {children}
                    <Footer />
                </main>
            )}
        />
    );
};

export default Layout;
