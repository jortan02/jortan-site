import React from "react";
import Layout from "../components/layout";
import "../styles/blog-post.scss";

const PrivacyPage = () => {
    const seo = {
        metaTitle: "Privacy Policy",
    };

    return (
        <Layout seo={seo} id="blog-post">
            <article className="content-container">
                <h1>Privacy Policy</h1>
                <h2>Formspree.io</h2>
                <p>This website uses a third-party service, Formspree, to process contact forms. By using the contact form, your information will be subjected to their privacy policy.</p>
                <p>You may view Formspree's privacy policy here: <a href="https://formspree.io/legal/privacy-policy/">https://formspree.io/legal/privacy-policy/</a></p>
            </article>
        </Layout>
    );
};

export default PrivacyPage;
