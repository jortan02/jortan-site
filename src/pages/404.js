import React from "react";
import Content from "../components/content";

const NotFoundPage = () => {
  return (
    <Content siteTitle="404">
      <div className="centered-container">
        <div className="not-found-container">
          <h1>:0</h1>
          <p>404 Page Not Found</p>
        </div>
      </div>
    </Content>
  )
}

export default NotFoundPage;
