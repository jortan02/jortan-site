import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/layout";
import "../styles/blog-post.scss";

// https://www.gatsbyjs.com/docs/mdx/programmatically-creating-pages/

const shortcodes = { Link }; // Provide common components here

const BlogPost = ({ data: { strapiBlogPosts: post } }) => {
    const seo = {
        metaTitle: post.title,
        metaDescription: post.description,
        shareImage: post.image,
    };

    return (
        <Layout seo={seo} id="blog-post">
            <article className="content-container">
                <div className="featured-image-container">
                    {post.image && (
                        <GatsbyImage
                            image={getImage(post.image.localFile)}
                            alt="Blog post image"
                            className="center-wrapper"
                        />
                    )}
                    <h2 className="title">{post.title}</h2>
                    {/* TODO: Reduce redundancy: duplicate of date in blog.js */}
                    <div className="date">
                        {post.blog_category && (
                            <>
                                <span>{post.blog_category.category.toUpperCase()}</span>
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    className="icon"
                                />
                            </>
                        )}
                        <span>{post.date}</span>
                    </div>
                </div>
                <MDXProvider components={shortcodes}>
                    <MDXRenderer>
                        {post.childStrapiBlogPostsContent.childMdx.body}
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
            blog_category {
                category
            }
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
