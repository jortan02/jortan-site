import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PortfolioCard = ({ project }) => {
    return (
        <li className="portfolio-project-container">
            {project.image && (
                <GatsbyImage
                    image={getImage(project.image.localFile)}
                    alt={project.image.alternativeText}
                    className="picture-wrapper"
                    imgClassName="picture"
                />
            )}
            <div className="text-container">
                {project.portfolio_category && (
                    <h3>{project.portfolio_category.category.toUpperCase()}</h3>
                )}
                <h2 className="title">{project.title}</h2>
                <p className="excerpt">{project.description}</p>
                {project.portfolio_skills && (
                    <ul className="skills-list">
                        {project.portfolio_skills.map((portfolio_skill) => (
                            <li key={portfolio_skill.id} className="skill">
                                <span>{portfolio_skill.skill}</span>
                            </li>
                        ))}
                    </ul>
                )}
                <span>
                    <Link to={project.slug} className="link">
                        <button>Read More</button>
                    </Link>
                    {project.github && (
                        <a href={project.github} className="link">
                            <button>View on Github</button>
                        </a>
                    )}
                </span>
            </div>
        </li>
    );
};

export default PortfolioCard;
