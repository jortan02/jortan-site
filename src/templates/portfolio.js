import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PortfolioCard from "../components/portfolio-card";
import Pagination from "../components/pagination";
import "../styles/portfolio.scss";

const PortfolioPage = ({ pageContext, data }) => {
    const seo = {
        metaTitle: "Portfolio",
    };

    const { edges: projects } = data.allStrapiPortfolioProjects;
    const { currentPage, numPages } = pageContext;

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
                <Pagination currentPage={currentPage} numPages={numPages} />
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
