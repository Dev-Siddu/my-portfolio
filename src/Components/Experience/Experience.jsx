import React from 'react';
import './Experience.css';
import { EXPERIENCES } from '../../constants';

const Experience = () => {
    return (
        <section id="Experience" className="experience-section">
            <div className="container">
                <h2 className="section-title text-center mb-5">
                    Professional <span className="text-emerald">Experience</span>
                </h2>

                <div className="timeline">
                    {EXPERIENCES.map((exp, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-dot"></div>
                            <div className="experience-card">
                                <div className="card-header-flex">
                                    <div>
                                        <h3 className="role-text">{exp.role}</h3>
                                        <h4 className="company-text">{exp.company}</h4>
                                    </div>
                                    <span className="duration-badge">{exp.duration}</span>
                                </div>
                                <p className="exp-desc">{exp.description}</p>
                                <ul className="exp-highlights">
                                    {exp.highlights.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;