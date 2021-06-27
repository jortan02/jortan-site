import React from "react";
import Main from "./main";
import Content from "./content";

const DefaultBlogPost = ({children}) => {
    return (
        <Main>
            <Content>
                {children}
            </Content>
        </Main>
    );
}

export default DefaultBlogPost;