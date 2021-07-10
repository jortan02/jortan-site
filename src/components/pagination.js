import React from "react";
import { Link } from "gatsby";
import "../styles/pagination.scss";

const Pagination = ({ page, currentPage, numPages }) => {
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;

    return (
        <div className="pagination-container">
            <Link
                to={`/${page}`}
                className={`first ${!isFirst ? "" : "disabled-link"}`}
            >
                {`<<`}
            </Link>
            {Array.from({ length: numPages }, (_, i) => (
                <Link
                    key={`${page}-number-${i + 1}`}
                    to={`/${page}${i === 0 ? "" : "/" + (i + 1)}`}
                    activeClassName="active-link"
                    className="number"
                >
                    {i + 1}
                </Link>
            ))}
            <Link
                to={`/${page}${numPages ? "/" + numPages : ""}`}
                className={`last ${!isLast ? "" : "disabled-link"}`}
            >
                {`>>`}
            </Link>
        </div>
    );
};

export default Pagination;
