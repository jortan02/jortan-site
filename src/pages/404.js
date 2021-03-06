import React from "react";
import Layout from "../components/layout";
import "../styles/404.scss";

const NotFoundPage = () => {
    const seo = {
        metaTitle: "404",
    };

    return (
        <Layout seo={seo}>
            <div className="centered-container">
                <div className="not-found-container">
                    <h1>:0</h1>
                    <p>404 Page Not Found</p>
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
