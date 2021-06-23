import React from "react";
import Content from "../components/content";
import Hero from "../components/hero";
import { StaticImage } from "gatsby-plugin-image";
import ContactInfo from "../components/contact-info";
import * as variables from "../styles/_variables.module.scss";
import "../styles/index.scss";

const IndexPage = () => {
    return (
        <Content pageTitle="Home">
            <Hero backgroundColor={variables.darkBlue} id="home">
                <div className="welcome-container">
                    <h1>Hello.</h1>
                    <hr />
                    <p>I'm Jordan. I am a computer science student, and the purpose of this site is to experiment with creating a website for myself and to show some of my work. Nice to meet you!</p>
                </div>
                <div className="card-container">
                    <StaticImage
                        src="../images/profile_picture.jpg"
                        alt="Jordan Tan"
                        className="profile-picture-wrapper"
                        imgClassName="profile-picture"
                    />
                    <div className="personal-info-container">
                        <div className="name-container">
                            <h2>Jordan Tan</h2>
                            <h3>Student</h3>
                        </div>
                        {/* <div className="contact-info-container">
                            <div className="contact-info">
                                <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
                                <span>435-823-0976</span>
                            </div>
                            <div className="contact-info">
                                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                                <span>jortan2002@gmail.com</span>
                            </div>
                        </div> */}
                        <ContactInfo />
                    </div>
                </div>
            </Hero>
        </Content>
    )
};

export default IndexPage;
