import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import PortfolioCard from "../components/portfolio-card";
import "../styles/portfolio.scss";
import "../styles/pagination.scss";

const PortfolioPage = ({ pageContext, data }) => {
    const seo = {
        metaTitle: "Portfolio",
    };

    const { edges: projects } = data.allStrapiPortfolioProjects;
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
                    {projects.map(({ node: project }) => (
                        <PortfolioCard key={project.id} project={project} />
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
        allStrapiPortfolioProjects(
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
                    portfolio_category {
                        category
                    }
                    portfolio_skills {
                        skill
                        id
                    }
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
