import React from "react";
import Header from "../components/header";
import "../styles/main.scss";

const Layout = ({ children }) => {
    return (
        <div className="main-container">
            <Header />
            {children}
        </div>
    )
};
export default Layout;
