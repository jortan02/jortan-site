import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import "../styles/blog.scss";

// https://nickymeuleman.netlify.app/blog/gatsby-pagination
// https://dev.to/steelvoltage/tip-disabling-buttons-as-links-in-gatsby-3o5n

const BlogPage = ({ pageContext, data }) => {
  const { edges: posts } = data.allMdx;
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  // const prevPage = currentPage - 1 === 1 ? "" : "/" + (currentPage - 1);
  // const nextPage = "/" + (currentPage + 1);

  return (
    <Layout pageTitle="Blog">
      <section className="content-container" id="blog">
        <div className="title-container">
          <h1>My Blog Posts</h1>
          <hr />
        </div>
        <ul className="blog-posts-container">
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <div className="blog-post-container">
                <div className="blog-title-container">
                  <Link to={post.fields.slug} className="link">
                    <h2>{post.frontmatter.title}</h2>
                  </Link>
                  <p>{post.frontmatter.date}</p>
                </div>
                <p>{post.excerpt}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="blog-navigation-container">
          <Link to="/blog" className={`first ${!isFirst ? "" : "disabled-link"}`}>
            <p>{`<<`}</p>
          </Link>
          {/* <Link to={"/blog" + prevPage} rel="prev" className={`prev ${!isFirst ? "" : "disabled-link"}`}>
            <p>{`<`}</p>
          </Link> */}
          {Array.from({ length: numPages }, (_, i) => (
            <Link key={`blog-number-${i + 1}`} to={`/blog${i === 0 ? "" : "/" + (i + 1)}`} activeClassName="active-link" className="number">
              <p>{i + 1}</p>
            </Link>
          ))}
          {/* <Link to={"/blog" + nextPage} rel="next" className={`next ${!isLast ? "" : "disabled-link"}`}>
            <p>{`>`}</p>
          </Link> */}
          <Link to={`/blog${numPages ? "/" + numPages : ""}`} className={`last ${!isLast ? "" : "disabled-link"}`}>
            <p>{`>>`}</p>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export const listQuery = graphql`
    query BlogListQuery($skip: Int!, $limit: Int!) {
      allMdx(
        filter: {frontmatter: {type: {eq: "Blog"}}}
        sort: {fields: [frontmatter___date], order: DESC}
        limit: $limit
        skip: $skip
      ) {
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
              date(formatString: "MM/DD/YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `

export default BlogPage;