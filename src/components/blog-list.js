// import React from "react";
// import { Link, graphql } from "gatsby";

// const BlogList = ({ data }) => {
//     const { edges: posts } = data.allMdx;
//     return (
//         <ul className="blog-posts-container">
//             {posts.map(({ node: post }) => (
//                 <li key={post.id}>
//                     <div className="blog-post-container">
//                         <div className="blog-title-container">
//                             <Link to={post.fields.slug} className="link">
//                                 <h2>{post.frontmatter.title}</h2>
//                             </Link>
//                             <p>{post.frontmatter.date}</p>
//                         </div>
//                         <p>{post.excerpt}</p>
//                     </div>
//                 </li>
//             ))}
//         </ul>
//     );
// }

// export const query = graphql`
//     query BlogPostsQuery($skip: Int!, $limit: Int!) {
//       allMdx(
//         filter: {frontmatter: {type: {eq: "Blog"}}}
//         sort: {fields: [frontmatter___date], order: DESC}
//         limit: $limit
//         skip: $skip
//       ) {
//         edges {
//           node {
//             id
//             excerpt
//             frontmatter {
//               title
//               date(formatString: "MM/DD/YYYY")
//             }
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `

// export default BlogList;
