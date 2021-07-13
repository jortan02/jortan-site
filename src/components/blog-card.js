import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes } from "@fortawesome/free-solid-svg-icons";
import BlogDate from "./blog-date";

const BlogCard = ({ post }) => {
    return (
        <li className="blog-post-container">
            <div className="blog-content-container">
                {post.image ? (
                    <GatsbyImage
                        image={getImage(post.image.localFile)}
                        alt={post.image.alternativeText}
                        className="picture-wrapper"
                        imgClassName="picture"
                    />
                ) : (
                    <div className="picture-wrapper">
                        <FontAwesomeIcon icon={faShapes} className="icon" />
                    </div>
                )}
                <div className="text-container">
                    <h2 className="title">
                        <Link to={post.fields.absoluteSlug} className="link">
                            {post.title}
                        </Link>
                    </h2>
                    <BlogDate post={post} />
                    <p className="excerpt">{post.description}</p>
                </div>
            </div>
            <p className="excerpt-mobile">{post.description}</p>
        </li>
    );
};

export default BlogCard;
