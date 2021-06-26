import React from "react";
import { graphql } from "gatsby";
import Main from "../components/main";
import "../styles/blog.scss";

const BlogPage = ({ data }) => {
    return (
        <Main pageTitle="Blog">
            <div className="title-container">
                <h1>Blog Posts</h1>
                <hr />
            </div>
            {
                data.allFile.nodes.map(node => (
                    <div key={node.name}>
                        <h2>{node.name}</h2>
                    </div>
                ))
            }
        </Main>
    );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage;
