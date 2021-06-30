import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import "../styles/blog.scss";

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
      <Layout pageTitle="Blog">
          <main className="content-container" id="blog">
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
          </main>
      </Layout>
  );
};

// export const query = graphql`
//   {
//     allMdx(
//       filter: {frontmatter: {type: {eq: "Blog"}}}
//       sort: {fields: [frontmatter___date], order: DESC}
//     ) {
//       edges {
//         node {
//           id
//           excerpt
//           frontmatter {
//             title
//             date(formatString: "MM/DD/YYYY")
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `

export const listQuery = graphql`
    query BlogListQuery($skip: Int, $limit: Int) {
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