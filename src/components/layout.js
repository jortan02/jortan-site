import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/layout.scss";
import Seo from "./seo";
import "@fontsource/roboto"; 
import "@fontsource/noto-sans";

const Layout = ({ seo, id, children }) => {

  return (
    <div className="site-container" id={id}>
      <Seo seo={seo}/>
      <Header />
        <main className="main-container">
          {children}
        </main>
      <Footer />
    </div>
  );
};

export default Layout;
