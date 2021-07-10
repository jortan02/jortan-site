import React from "react";
import BlogCard from "./blog-card";
import "../styles/blog-cards.scss";

 const BlogCards = ({posts}) => {
    return (
    <ul className="blog-posts-container">
        {posts.map(({ node: post }) => (
            <BlogCard key={post.id} post={post} />
        ))}
    </ul>
    );
 }

 export default BlogCards;