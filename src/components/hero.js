import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="card-container">
                <div className="profile-picture-container">
                    <StaticImage
                        src="../images/profile_picture.jpg"
                        alt="Jordan Tan"
                        width={150}
                        height={150}
                    />
                </div>
                <div className="personal-info-container">
                    <div className="name-container">
                        <h1>Jordan Tan</h1>
                        <h2>Student</h2>
                    </div>
                    <div className="contact-info-container">
                        <div className="contact-info">
                            <FontAwesomeIcon icon={faPhoneAlt} />
                            <span>435-823-0976</span>
                        </div>
                        <div className="contact-info">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>jortan2002@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="welcome-container">
                    {/* <h1>Hello,</h1>
                    <h2>I'm Jordan. It's nice to meet you.</h2> */}
                    <h3>Hello, I'm Jordan. It's nice to meet you.</h3>
                </div>
        </div>
    );
};

export default Hero;
