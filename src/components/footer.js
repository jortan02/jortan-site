import React from "react";
import CircleLinks from "./circle-links";
import "../styles/footer.scss";


const Footer = () => {
    return (
        <footer>
            <CircleLinks />
            <div className="footer-container">
                <span className="copyright">&copy; 2021 Jordan Tan</span>
                <span className="creation">Created using Gatsby</span>
            </div>
        </footer>
    );
};

export default Footer;
