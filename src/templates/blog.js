import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/layout";
import "../styles/blog.scss";
import "../styles/pagination.scss";

// https://nickymeuleman.netlify.app/blog/gatsby-pagination
// https://dev.to/steelvoltage/tip-disabling-buttons-as-links-in-gatsby-3o5n

const BlogPage = ({ pageContext, data }) => {
    const { edges: posts } = data.allMdx;
    const { currentPage, numPages } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;

    return (
        <Layout pageTitle="Blog" id="blog">
            <section className="content-container">
                <div className="center-wrapper">
                    <div className="title-container">
                        <h1>My Blog Posts</h1>
                        <hr />
                    </div>
                </div>
                <ul className="blog-posts-container">
                    {posts.map(({ node: post }) => (
                        <li key={post.id} className="blog-post-container">
                            <div className="blog-content-container">
                                {post.frontmatter.image ? (
                                    <GatsbyImage
                                        image={
                                            post.frontmatter.image
                                                .childImageSharp.gatsbyImageData
                                        }
                                        alt=""
                                        className="picture-wrapper"
                                    />
                                ) : (
                                    <div className="picture-wrapper">
                                        <FontAwesomeIcon
                                            icon={faShapes}
                                            className="icon"
                                        />
                                    </div>
                                )}
                                <div className="text-container">
                                    <h2 className="title">
                                        <Link
                                            to={post.fields.slug}
                                            className="link"
                                        >
                                            {post.frontmatter.title}
                                        </Link>
                                    </h2>
                                    <p className="date">
                                        {post.frontmatter.date}
                                    </p>
                                    <p className="excerpt">{post.excerpt}</p>
                                </div>
                            </div>
                            <p className="excerpt-mobile">{post.excerpt}</p>
                        </li>
                    ))}
                </ul>
                <div className="pagination-container">
                    <Link
                        to="/blog"
                        className={`first ${!isFirst ? "" : "disabled-link"}`}
                    >
                        <span>{`<<`}</span>
                    </Link>
                    {Array.from({ length: numPages }, (_, i) => (
                        <Link
                            key={`blog-number-${i + 1}`}
                            to={`/blog${i === 0 ? "" : "/" + (i + 1)}`}
                            activeClassName="active-link"
                            className="number"
                        >
                            <span>{i + 1}</span>
                        </Link>
                    ))}
                    <Link
                        to={`/blog${numPages ? "/" + numPages : ""}`}
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
    query BlogListQuery($skip: Int!, $limit: Int!) {
        allMdx(
            filter: { fields: { collection: { eq: "blog" } } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 120)
                    frontmatter {
                        title
                        date(formatString: "MM/DD/YYYY")
                        image {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 175
                                    height: 175
                                    layout: FIXED
                                )
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;

export default BlogPage;
