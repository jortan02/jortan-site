import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import Layout from "../components/layout";
import "../styles/portfolio-project.scss";

// https://www.gatsbyjs.com/docs/mdx/programmatically-creating-pages/

const shortcodes = { Link }; // Provide common components here

const PortfolioProject = ({ data }) => {
    const project = data.strapiPortfolioProjects;

    const seo = {
        metaTitle: project.title,
        metaDescription: project.description,
        shareImage: project.image,
    };

    return (
        <Layout seo={seo} id="portfolio-project">
            <article className="content-container">
                <div className="featured-image-container">
                    {project.image && (
                        <GatsbyImage
                            image={getImage(project.image.localFile)}
                            alt={project.image.alternativeText}
                            className="center-wrapper"
                        />
                    )}
                    {project.portfolio_category && (
                        <span className="category">
                            {project.portfolio_category.category.toUpperCase()}
                        </span>
                    )}
                    <h2 className="title">{project.title}</h2>
                    {project.portfolio_skills && (
                        <ul className="skills-list">
                            {project.portfolio_skills.map((portfolio_skill) => (
                                <li key={portfolio_skill.id} className="skill">
                                    {portfolio_skill.skill}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <MDXProvider components={shortcodes}>
                    <MDXRenderer>
                        {
                            project.childStrapiPortfolioProjectsContent.childMdx
                                .body
                        }
                    </MDXRenderer>
                </MDXProvider>
                {project.github && (
                    <a href={project.github} className="link">
                        <button>View on Github</button>
                    </a>
                )}
            </article>
        </Layout>
    );
};

export const pageQuery = graphql`
    query PortfolioProjectQuery($id: String) {
        strapiPortfolioProjects(id: { eq: $id }) {
            id
            title
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
                        gatsbyImageData(layout: CONSTRAINED)
                    }
                }
            }
            childStrapiPortfolioProjectsContent {
                childMdx {
                    body
                }
            }
        }
    }
`;

export default PortfolioProject;
