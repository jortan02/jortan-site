import React from "react";
import { Link } from "gatsby";
import "../styles/pagination.scss";

const Pagination = ({ currentPage, numPages }) => {
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;

    return (
        <div className="pagination-container">
            <Link
                to="/blog"
                className={`first ${!isFirst ? "" : "disabled-link"}`}
            >
                <span>{`<<`}</span>
            </Link>
            {Array.from({ length: numPages }, (_, i) => (
                <Link
                    key={`blog-number-${i + 1}`}
                    to={`/blog${i === 0 ? "" : "/" + (i + 1)}`}
                    activeClassName="active-link"
                    className="number"
                >
                    <span>{i + 1}</span>
                </Link>
            ))}
            <Link
                to={`/blog${numPages ? "/" + numPages : ""}`}
                className={`last ${!isLast ? "" : "disabled-link"}`}
            >
                <span>{`>>`}</span>
            </Link>
        </div>
    );
};

export default Pagination;
