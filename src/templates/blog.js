import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "../styles/blog.scss";
import Pagination from "../components/pagination";
import BlogCards from "../components/blog-cards";

// https://nickymeuleman.netlify.app/blog/gatsby-pagination
// https://dev.to/steelvoltage/tip-disabling-buttons-as-links-in-gatsby-3o5n

const BlogPage = ({ pageContext, data }) => {
    const seo = {
        metaTitle: "Blog",
    };

    const { edges: posts } = data.allStrapiBlogPosts;
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
                <Pagination currentPage={currentPage} numPages={numPages} />
            </section>
        </Layout>
    );
};

export const listQuery = graphql`
    query BlogListQuery($skip: Int!, $limit: Int!) {
        allStrapiBlogPosts(
            sort: { fields: date, order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    slug
                    date(formatString: "MM/DD/YYYY")
                    title
                    description
                    blog_category {
                        category
                    }
                    image {
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
    }
`;

export default BlogPage;
