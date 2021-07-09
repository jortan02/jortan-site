import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const BlogDate = ({ post }) => {
    return (
        <div className="date">
            {post.blog_category && (
                <>
                    <span>{post.blog_category.category.toUpperCase()}</span>
                    <FontAwesomeIcon icon={faCircle} className="icon" />
                </>
            )}
            <span>{post.date}</span>
        </div>
    );
};

export default BlogDate;
