import React from "react";
import { Helmet } from "react-helmet";
import { graphql, StaticQuery } from "gatsby";

// const Content = ({siteTitle, children}) => {
//     return (
//         <div className="content-container">
//             <Helmet>
//                 <title>{siteTitle}</title>
//             </Helmet>
//             {children}
//         </div>
//     );
// };

const Content = ({ siteTitle, children }) => {
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
                        <title>{siteTitle}{siteTitle ? " | ": ""}{data.site.siteMetadata.title}</title>
                    </Helmet>
                    {children}
                </div>
            )}
        />
    );
};

export default Content;
