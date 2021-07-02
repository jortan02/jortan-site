import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import ResumeFile from "../files/Resume - Jordan Tan.pdf";
import "../styles/resume.scss";

const ResumePage = () => {
    return (
        <Layout pageTitle="About" id="resume">
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
                    <StaticImage
                        src="../images/resume.jpg"
                        alt="Jordan Tan's resume"
                        className="resume-wrapper"
                        imgClassName="resume"
                    />
                </figure>
                <dl id="resume-text" aria-label="Resume text">
                    <dt>Information</dt>
                    <dl>
                        <dt>Jordan Tan</dt>
                        <dt>741 E 600 N Roosevelt, UT 84066</dt>
                        <dt>(435) 823-0976</dt>
                        <dt>jortan2002@gmail.com</dt>
                    </dl>
                    <dt>Education</dt>
                    <dl>
                        <dt>Union High School, Roosevelt, UT</dt>
                        <dl>AUG 2016 - MAY 2020</dl>
                        <dl>4.00 GPA, 1st in Class Ranking, Valedictorian</dl>
                        <dl>
                            2019 - 2020 Sterling Scholar for Computer Technology
                        </dl>
                        <dt>The University of Utah, Salt Lake City, UT</dt>
                        <dl>AUG 2020 - CURRENT</dl>
                        <dl>School of Engineering, Computer Science Major</dl>
                    </dl>
                    <dt>Employment</dt>
                    <dl>
                        <dt>China Star, Roosevelt, UT - Cashier/ Host</dt>
                        <dl>JUL 2016 - CURRENT (Summers)</dl>
                        <dt>
                            Vallkyrie Management Solutions, Los Angeles, CA -
                            Survey Proctor
                        </dt>
                        <dl>JUL 2019</dl>
                    </dl>
                    <dt>Skills</dt>
                    <dl>
                        HTML, CSS, SASS, Javascript, React, Jekyll, and Gatsby
                    </dl>
                    <dl>Java and Python</dl>
                    <dl>Adobe Photoshop and Illustrator</dl>
                    <dl>MOS Certified 2016</dl>
                    <dl>
                        Communication skills in customer service and from
                        working with coworkers
                    </dl>
                    <dl>
                        Leadership skills from being elected into student
                        council
                    </dl>
                    <dt>Leadership</dt>
                    <dl>
                        <dt>
                            Student Council - Student Body Historian/Technology
                            Specialist
                        </dt>
                        <dl>AUG 2019 - MAY 2020</dl>
                        <dt>
                            CAPS Television Broadcasting -Technical Director
                        </dt>
                        <dl>AUG 2019 - MAY 2020</dl>
                    </dl>
                    <dt>Service</dt>
                    <dl>
                        <dt>Technical Assistant for Theater</dt>
                        <dl>NOV 2019 - MAY 2020</dl>
                        <dt>Interact/ Rotary International Club</dt>
                        <dl>AUG 2018 - MAY 2020</dl>
                    </dl>
                </dl>
                <a href={ResumeFile} download>
                    <button>View PDF of resume</button>
                </a>
            </article>
        </Layout>
    );
};

export default ResumePage;
