import React from "react";
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Main from "../components/main";
import Content from "../components/content";

// https://www.gatsbyjs.com/docs/mdx/programmatically-creating-pages/

const shortcodes = { Link } // Provide common components here

const BlogPost = ({ data: { mdx } }) => {
    return (
        <Main pageTitle={mdx.frontmatter.title}>
            <Content>
                <h1>{mdx.frontmatter.title}</h1>
                <MDXProvider components={shortcodes}>
                    <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
                </MDXProvider>
            </Content>
        </Main>
    );
} 

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

export default BlogPost;