import React from "react";
import Main from "../components/main";
import "../styles/404.scss";

const NotFoundPage = () => {
  return (
    <Main pageTitle="404">
      <div className="centered-container">
        <div className="not-found-container">
          <h1>:0</h1>
          <p>404 Page Not Found</p>
        </div>
      </div>
    </Main>
  )
}

export default NotFoundPage;
