import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import "../styles/resume.scss";

const ResumePage = () => {
    const { strapiResume } = useStaticQuery(query);

    const seo = {
        metaTitle: "Resume",
    };

    return (
        <Layout seo={seo} id="resume">
            <article className="content-container">
                <div className="title-container">
                    <h1>A Few Things about Me.</h1>
                    <hr />
                    <p>
                        I'm from a small town called Roosevelt, and I have lived
                        in Utah for my entire life. I'm currently attending the
                        University of Utah, and I'm interested in technology,
                        programs, design, and everything else in between. I'm
                        also passionate about learning new things, especially
                        when it benefits myself or others.
                    </p>
                </div>
                <figure>
                    {/* <StaticImage
                        src="../images/Resume - Jordan Tan.jpg"
                        alt="Jordan Tan's resume"
                        className="resume-wrapper"
                        imgClassName="resume"
                    /> */}
                    <GatsbyImage
                        image={getImage(strapiResume.image.localFile)}
                        alt={
                            strapiResume.image.alternativeText
                                ? strapiResume.image.alternativeText
                                : ""
                        }
                        className="resume-wrapper"
                        imgClassName="resume"
                    />
                </figure>
                <dl id="resume-text" aria-label="Resume text">
                    <MDXProvider>
                        <MDXRenderer>
                            {
                                strapiResume.childStrapiResumeContent.childMdx
                                    .body
                            }
                        </MDXRenderer>
                    </MDXProvider>
                </dl>
                <div className="link-wrapper">
                    <a href={strapiResume.link} download className="button">
                        Download PDF of Resume
                    </a>
                </div>
            </article>
        </Layout>
    );
};

const query = graphql`
    query {
        strapiResume {
            childStrapiResumeContent {
                childMdx {
                    body
                }
            }
            link
            image {
                localFile {
                    childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED, quality: 90)
                    }
                }
            }
        }
    }
`;

export default ResumePage;
