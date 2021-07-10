import React from "react";
import PortfolioCard from "./portfolio-card";
import "../styles/portfolio-cards.scss";

 const PortfolioCards = ({projects}) => {
    return (
    <ul className="portfolio-projects-container">
        {projects.map(({ node: project }) => (
            <PortfolioCard key={project.id} post={project} />
        ))}
    </ul>
    );
 }

 export default PortfolioCards;