import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import "../styles/resume.scss";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

const ResumePage = ({ data: { strapiResume: resume } }) => {
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
                    <GatsbyImage
                        image={getImage(resume.image.localFile)}
                        alt="Jordan Tan's resume"
                        className="resume-wrapper"
                        imgClassName="resume"
                    />
                </figure>
                <dl id="resume-text" aria-label="Resume text">
                    <MDXProvider>
                        <MDXRenderer>
                            {resume.childStrapiResumeContent.childMdx.body}
                        </MDXRenderer>
                    </MDXProvider>
                </dl>
                <div className="link-wrapper">
                    <a href={resume.file.localFile.publicURL} download>
                        <button>Download PDF of Resume</button>
                    </a>
                </div>
            </article>
        </Layout>
    );
};

export const ResumePagequery = graphql`
    {
        strapiResume {
            childStrapiResumeContent {
                childMdx {
                    body
                }
            }
            file {
                localFile {
                    publicURL
                }
            }
            image {
                localFile {
                    childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED)
                    }
                }
            }
        }
    }
`;

export default ResumePage;
