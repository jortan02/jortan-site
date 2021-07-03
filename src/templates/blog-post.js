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

const BlogPost = ({ data: { mdx } }) => {
    return (
        <Layout pageTitle={mdx.frontmatter.title} id="blog-post">
            <article className="content-container">
                <div className="title-container">
                    {mdx.frontmatter.image && (
                        <div className="center-wrapper">
                            <GatsbyImage
                                image={
                                    mdx.frontmatter.image.childImageSharp
                                        .gatsbyImageData
                                }
                                alt=""
                            />
                        </div>
                    )}
                    <h1>{mdx.frontmatter.title}</h1>
                    <p>{mdx.frontmatter.date}</p>
                </div>
                <MDXProvider components={shortcodes}>
                    <MDXRenderer frontmatter={mdx.frontmatter}>
                        {mdx.body}
                    </MDXRenderer>
                </MDXProvider>
            </article>
        </Layout>
    );
};

export const pageQuery = graphql`
    query BlogPostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
                date(formatString: "MM/DD/YYYY")
                image {
                    childImageSharp {
                        gatsbyImageData(layout: FIXED)
                    }
                }
            }
        }
    }
`;

export default BlogPost;
