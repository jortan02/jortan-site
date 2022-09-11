import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BlogCards from "../components/blog-cards";
import Pagination from "../components/pagination";
import "../styles/blog.scss";

// https://nickymeuleman.netlify.app/blog/gatsby-pagination
// https://dev.to/steelvoltage/tip-disabling-buttons-as-links-in-gatsby-3o5n

const BlogPage = ({ pageContext, data }) => {
    const seo = {
        metaTitle: "Blog",
    };

    const posts = data.allStrapiBlogPost.edges;
    const { currentPage, numPages } = pageContext;

    return (
        <Layout seo={seo} id="blog">
            <section className="content-container">
                <div className="center-wrapper">
                    <div className="title-container">
                        <h1>My Blog Posts</h1>
                        <hr />
                    </div>
                </div>
                <BlogCards posts={posts} />
                <Pagination
                    page="blog"
                    currentPage={currentPage}
                    numPages={numPages}
                />
            </section>
        </Layout>
    );
};

export const blogQuery = graphql`
    fragment AllBlogData on STRAPI_BLOG_POSTConnection {
        edges {
            node {
                id
                fields {
                    absoluteSlug
                }
                date(formatString: "MM/DD/YYYY")
                title
                description
                blog_category {
                    category
                }
                image {
                    alternativeText
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                width: 175
                                height: 175
                                layout: FIXED
                            )
                        }
                    }
                }
            }
        }
    }
`;

export const listQuery = graphql`
    query BlogListQuery($skip: Int!, $limit: Int!) {
        allStrapiBlogPost(
            sort: { fields: date, order: DESC }
            limit: $limit
            skip: $skip
        ) {
            ...AllBlogData
        }
    }
`;

export default BlogPage;
