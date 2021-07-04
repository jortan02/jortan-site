// import React from "react";
// import Layout from "../components/layout";

// const PortfolioPage = () => {
//     return (
//         <Layout pageTitle="Portfolio">
//             <div className="centered-container">
//                 <div className="not-found-container">
//                     <h1>Coming Soon</h1>
//                 </div>
//             </div>
//         </Layout>
//     )
// };

// export default PortfolioPage;

import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import "../styles/portfolio.scss";
import "../styles/pagination.scss";

const PortfolioPage = ({ pageContext, data }) => {
    const { edges: posts } = data.allMdx;
    const { currentPage, portfolioNumPages } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === portfolioNumPages;

    return (
        <Layout pageTitle="Portfolio" id="portfolio">
            <section className="content-container">
                <div className="center-wrapper">
                    <div className="title-container">
                        <h1>My Work</h1>
                        <hr />
                    </div>
                </div>
                <ul className="portfolio-items-container">
                    {posts.map(({ node: post }) => (
                        <li key={post.id} className="portfolio-item-container">
                            <div className="portfolio-content-container">
                                {post.frontmatter.image && (<GatsbyImage
                                    image={
                                        post.frontmatter.image.childImageSharp
                                            .gatsbyImageData
                                    }
                                    alt=""
                                    className="picture-wrapper"
                                />)}
                                <div className="text-container">
                                    <h2 className="title">
                                        {post.frontmatter.title}
                                    </h2>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="pagination-container">
                    <Link
                        to="/portfolio"
                        className={`first ${!isFirst ? "" : "disabled-link"}`}
                    >
                        <span>{`<<`}</span>
                    </Link>
                    {Array.from({ length: portfolioNumPages }, (_, i) => (
                        <Link
                            key={`portfolio-number-${i + 1}`}
                            to={`/portfolio${i === 0 ? "" : "/" + (i + 1)}`}
                            activeClassName="active-link"
                            className="number"
                        >
                            <span>{i + 1}</span>
                        </Link>
                    ))}
                    <Link
                        to={`/portfolio${portfolioNumPages ? "/" + portfolioNumPages : ""}`}
                        className={`last ${!isLast ? "" : "disabled-link"}`}
                    >
                        <span>{`>>`}</span>
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

export const listQuery = graphql`
    query PortfolioListQuery($skip: Int!, $limit: Int!) {
        allMdx(
            filter: { fields: { collection: { eq: "portfolio" } } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        image {
                            childImageSharp {
                                gatsbyImageData(layout: CONSTRAINED)
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default PortfolioPage;
