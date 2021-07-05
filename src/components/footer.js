import React from "react";
import CircleLinks from "./circle-links";
import "../styles/footer.scss";


const Footer = () => {
    return (
        <footer>
            <div className="circle-links-mobile">
                <CircleLinks />
            </div>
            <div className="footer-container">
                <span>&copy; 2021 Jordan Tan</span>
                <div className="circle-links">
                    <CircleLinks />
                </div>
                <span>Created using Gatsby</span>
            </div>
        </footer>
    );
};

export default Footer;
