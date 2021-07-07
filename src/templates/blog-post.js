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

const BlogPost = ({ data: { strapiBlogs } }) => {
    const seo = {
        metaTitle: strapiBlogs.title,
    };

    return (
        <Layout seo={seo} id="blog-post">
            <article className="content-container">
                <div className="featured-image-container">
                    {strapiBlogs.image && (
                        <div className="center-wrapper">
                            <GatsbyImage
                                image={
                                    strapiBlogs.image.localFile.childImageSharp
                                        .gatsbyImageData
                                }
                                alt=""
                            />
                        </div>
                    )}
                    <h2 className="title">{strapiBlogs.title}</h2>
                    {strapiBlogs.date && (
                        <p className="date">{strapiBlogs.date}</p>
                    )}
                </div>
                <MDXProvider components={shortcodes}>
                    <MDXRenderer>
                        {strapiBlogs.childStrapiBlogsContent.childMdx.body}
                    </MDXRenderer>
                </MDXProvider>
            </article>
        </Layout>
    );
};

export const pageQuery = graphql`
    query BlogPostQuery($id: String) {
        strapiBlogs(id: { eq: $id }) {
            id
            title
            date(formatString: "MM/DD/YYYY")
            image {
                localFile {
                    childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED)
                    }
                }
            }
            childStrapiBlogsContent {
                childMdx {
                    body
                }
            }
        }
    }
`;

export default BlogPost;
