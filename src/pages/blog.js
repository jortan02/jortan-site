import React from "react";
import { Link, graphql } from "gatsby";
import Main from "../components/main";
import Content from "../components/content";
import "../styles/blog.scss";

const BlogPage = ({ data }) => {
  return (
    <Main pageTitle="Blog">
      <Content id="blog">
        <div className="title-container">
          <h1>Blog Posts</h1>
          <hr />
        </div>
        {
          data.allMdx.edges.map(edge => (
            <div className="blog-post-container" key={edge.node.frontmatter.title}>
              <h2><Link to={`/blog/${edge.node.slug}`}>{edge.node.frontmatter.title}</Link></h2>
              <p>{edge.node.frontmatter.date}</p>
            </div>
          ))
        }
      </Content>
    </Main>
  );
};

// export const query = graphql`
//   query {
//     allFile {
//       nodes {
//         name
//       }
//     }
//   }
// `

export const query = graphql`
  {
    allMdx(
      filter: {frontmatter: {type: {eq: "Blog"}}}
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
          }
          slug
        }
      }
    }
  }
`

export default BlogPage;
