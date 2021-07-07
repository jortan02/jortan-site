import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import "../styles/portfolio.scss";
import "../styles/pagination.scss";

const PortfolioPage = ({ pageContext, data }) => {
    const seo = {
        metaTitle: "Portfolio",
    };

    const { edges: posts } = data.allStrapiPortfolios;
    const { currentPage, numPages } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;

    return (
        <Layout seo={seo} id="portfolio">
            <section className="content-container">
                <div className="center-wrapper">
                    <div className="title-container">
                        <h1>My Previous Work</h1>
                        <hr />
                    </div>
                </div>
                <ul className="portfolio-projects-container">
                    {posts.map(({ node: post }) => (
                        <li
                            key={post.id}
                            className="portfolio-project-container"
                        >
                            {post.image && (
                                <GatsbyImage
                                    image={
                                        post.image.localFile.childImageSharp
                                            .gatsbyImageData
                                    }
                                    alt=""
                                    className="picture-wrapper"
                                />
                            )}
                            <div className="text-container">
                                <h2 className="title">{post.title}</h2>
                                <p className="excerpt">{post.description}</p>
                                <Link to={post.slug} className="link">
                                    <button>Read More</button>
                                </Link>
                                {post.github && (
                                    <Link to={post.github} className="link">
                                        <button>View on Github</button>
                                    </Link>
                                )}
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
                    {Array.from({ length: numPages }, (_, i) => (
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
                        to={`/portfolio${numPages ? "/" + numPages : ""}`}
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
        allStrapiPortfolios(
            sort: { fields: order, order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    slug
                    title
                    description
                    content
                    github
                    image {
                        localFile {
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
