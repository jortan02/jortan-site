import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import Layout from "../components/layout";
import "../styles/blog-post.scss";

// https://www.gatsbyjs.com/docs/mdx/programmatically-creating-pages/

const shortcodes = { Link }; // Provide common components here

const PortfolioProject = ({ data: { strapiPortfolioProjects: project } }) => {
    const seo = {
        metaTitle: project.title,
        metaDescription: project.description,
        shareImage: project.image,
    };

    return (
        <Layout seo={seo} id="blog-post">
            <article className="content-container">
                <div className="featured-image-container">
                    {project.image && (
                            <GatsbyImage
                            image={getImage(project.image.localFile)}
                            alt={`${project.title} image`}
                            className="center-wrapper"
                        />
                    )}
                    <h2 className="title">{project.title}</h2>
                </div>
                <MDXProvider components={shortcodes}>
                    <MDXRenderer>
                        {project.childStrapiPortfolioProjectsContent.childMdx.body}
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
            image {
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
