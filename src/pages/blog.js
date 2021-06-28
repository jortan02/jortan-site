import React from "react";
import { Link, graphql } from "gatsby";
import Main from "../components/main";
import Content from "../components/content";
import "../styles/blog.scss";

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
      <Main pageTitle="Blog">
          <Content id="blog">
              <div className="title-container">
                  <h1>Blog Posts</h1>
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
          </Content>
      </Main>
  );
};

export const query = graphql`
  {
    allMdx(
      filter: {frontmatter: {type: {eq: "Blog"}}}
      sort: {fields: [frontmatter___date], order: DESC}
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