import React from "react";
import Main from "../components/main";
import "../styles/resume.scss";

const ResumePage = () => {
    return (
        <Main pageTitle="About">
            <div className="content-container">
                <h1>A few things about me.</h1>
                <p>I'm from a small town called Roosevelt, and I have lived in Utah for my entire life. I am interested in technology, programming, design, and a little bit of everything in between. I am passionate about learning new things, especially when it benefits myself or others.</p>
            </div>
        </Main>
    )
};

export default ResumePage;