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

const BlogPost = ({ data: { strapiBlogPosts } }) => {
    const seo = {
        metaTitle: strapiBlogPosts.title,
    };

    return (
        <Layout seo={seo} id="blog-post">
            <article className="content-container">
                <div className="featured-image-container">
                    {strapiBlogPosts.image && (
                        <div className="center-wrapper">
                            <GatsbyImage
                                image={
                                    strapiBlogPosts.image.localFile.childImageSharp
                                        .gatsbyImageData
                                }
                                alt=""
                            />
                        </div>
                    )}
                    <h2 className="title">{strapiBlogPosts.title}</h2>
                    {strapiBlogPosts.date && (
                        <p className="date">{strapiBlogPosts.date}</p>
                    )}
                </div>
                <MDXProvider components={shortcodes}>
                    <MDXRenderer>
                        {strapiBlogPosts.childStrapiBlogPostsContent.childMdx.body}
                    </MDXRenderer>
                </MDXProvider>
            </article>
        </Layout>
    );
};

export const pageQuery = graphql`
    query BlogPostQuery($id: String) {
        strapiBlogPosts(id: { eq: $id }) {
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
            childStrapiBlogPostsContent {
                childMdx {
                    body
                }
            }
        }
    }
`;

export default BlogPost;
