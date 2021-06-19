import React from "react";
import Layout from "./src/components/layout";
import "./src/styles/main.scss";

// Wraps every page in a component
const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export default wrapPageElement;