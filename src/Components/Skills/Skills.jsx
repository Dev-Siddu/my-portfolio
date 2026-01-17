import React from 'react';
import './Skills.css';
import { SKILLCATEGORIES } from '../../constants';


const Skills = () => {
    return (
        <section id="Skills" className="skills-section">
            <div className="container">
                <h2 className="section-title text-center mb-5">
                    Technical <span className="text-emerald">Proficiency</span>
                </h2>
                <div className="row g-4">
                    {SKILLCATEGORIES.map((category, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="skill-card">
                                <div className="skill-header">
                                    <i className={`bi ${category.icon} text-emerald`}></i>
                                    <h3>{category.title}</h3>
                                </div>
                                <div className="skill-list">
                                    {category.skills.map((skill, i) => (
                                        <span key={i} className="skill-badge">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;