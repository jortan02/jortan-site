import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero";
import PersonalCard from "../components/personal-card";
import BlogCards from "../components/blog-cards";
import PortfolioCards from "../components/portfolio-cards";
import "../styles/index.scss";

// TODO: Add some blog posts and portfolio posts to the index page.

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        {
            allStrapiBlogPosts(
                sort: { fields: date, order: DESC }
                limit: 3) {
                ...AllBlogData
            }
            allStrapiPortfolioProjects(
                sort: { fields: order, order: DESC }
                limit: 3
            ) {
                ...AllPortfolioData
            }
        }
    `);

    const posts = data.allStrapiBlogPosts.edges;
    const projects = data.allStrapiPortfolioProjects.edges;

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
                    <Link to="/resume">
                        <button>View My Resume</button>
                    </Link>
                </div>
                <PersonalCard />
            </Hero>
            <div className="content-container">
                <h1>Recent Blog Posts</h1>
                <BlogCards posts={posts}/>
                <Link to="/blog">
                        <button>View More Posts</button>
                </Link>
            </div>
            <div className="content-container">
                <h1>Recent Portfolio Projects</h1>
                <PortfolioCards projects={projects} />
                <Link to="/portfolio">
                        <button>View More Projects</button>
                </Link>
            </div>
        </Layout>
    );
};

export default IndexPage;
