import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import Layout from "../components/layout";
import "../styles/blog-post.scss";

// https://www.gatsbyjs.com/docs/mdx/programmatically-creating-pages/

const shortcodes = { Link }; // Provide common components here

const PortfolioProject = ({ data: { strapiPortfolioProjects } }) => {
    const seo = {
        metaTitle: strapiPortfolioProjects.title,
    };

    return (
        <Layout seo={seo} id="blog-post">
            <article className="content-container">
                <div className="featured-image-container">
                    {strapiPortfolioProjects.image && (
                        <div className="center-wrapper">
                            <GatsbyImage
                                image={
                                    strapiPortfolioProjects.image.localFile.childImageSharp
                                        .gatsbyImageData
                                }
                                alt=""
                            />
                        </div>
                    )}
                    <h2 className="title">{strapiPortfolioProjects.title}</h2>
                </div>
                <MDXProvider components={shortcodes}>
                    <MDXRenderer>
                        {strapiPortfolioProjects.childStrapiPortfolioProjectsContent.childMdx.body}
                    </MDXRenderer>
                </MDXProvider>
                {strapiPortfolioProjects.github && (
                    <Link to={strapiPortfolioProjects.github} className="link">
                        <button>View on Github</button>
                    </Link>
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
