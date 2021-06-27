import React from "react";
import PropTypes from "prop-types";
import "../styles/content.scss";

const Content = ({id, children}) => {
    return (
        <div className="content-container" id={id}>
            {children}
        </div>
    );
}

Content.propTypes = {
    id: PropTypes.string,
}

Content.defaultProps = {
    id: "",
}

export default Content;