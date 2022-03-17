import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PortfolioCards from "../components/portfolio-cards";
import Pagination from "../components/pagination";
import "../styles/portfolio.scss";

const PortfolioPage = ({ pageContext, data }) => {
    const seo = {
        metaTitle: "Portfolio",
    };

    const projects = data.allStrapiPortfolioProjects.edges;
    const { currentPage, numPages } = pageContext;

    return (
        <Layout seo={seo} id="portfolio">
            <section className="content-container">
                <div className="center-wrapper">
                    <div className="title-container">
                        <h1>My Previous Works</h1>
                        <hr />
                    </div>
                </div>
                <PortfolioCards projects={projects} />
                <Pagination
                    page="portfolio"
                    currentPage={currentPage}
                    numPages={numPages}
                />
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
            ...AllPortfolioData
        }
    }
`;

export const portfolioQuery = graphql`
    fragment AllPortfolioData on StrapiPortfolioProjectsConnection {
        edges {
            node {
                id
                fields {
                    absoluteSlug
                }
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
                    alternativeText
                    localFile {
                        childImageSharp {
                            gatsbyImageData(layout: CONSTRAINED, quality: 90)
                        }
                    }
                }
            }
        }
    }
`;

export default PortfolioPage;
