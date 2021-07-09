import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero";
import "../styles/index.scss";
import PersonalCard from "../components/personal-card";

// TODO: Add some blog posts and portfolio posts to the index page.

const IndexPage = () => {
    const seo = {
        metaTitle: "Home",
    };

    return (
        <Layout seo={seo} id="home">
            <Hero>
                <div className="title-container">
                    <h1>Hello.</h1>
                    <hr />
                    <p>
                        I'm Jordan. I am a computer science student, and the
                        purpose of this site is to experiment with creating a
                        website for myself and to show some of my work. Nice to
                        meet you!
                    </p>
                    <Link to="/resume"><button>View My Resume</button></Link>
                </div>
                <PersonalCard />
            </Hero>
        </Layout>
    );
};

export default IndexPage;
