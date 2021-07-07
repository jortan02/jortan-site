import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
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
                        
                        <li
                            key={project.id}
                            className="portfolio-project-container"
                        >
                            {project.image && (
                                <GatsbyImage
                                    image={getImage(project.image.localFile)}
                                    alt={`${project.title} image`}
                                    className="picture-wrapper"
                                    imgClassName="picture"
                                />
                            )}
                            <div className="text-container">
                                <h2 className="title">{project.title}</h2>
                                <p className="excerpt">{project.description}</p>
                                <Link to={project.slug} className="link">
                                    <button>Read More</button>
                                </Link>
                                {project.github && (
                                    <a href={project.github} className="link">
                                        <button>View on Github</button>
                                    </a>
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
