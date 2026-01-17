import React from 'react';
import './Footer.css';
import { RESUME_PATH } from '../../constants'; // Using the centralized path we created

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <hr className="footer-divider" />
                <div className="footer-content">
                    <div className="footer-left">
                        <p>© {currentYear} Siddarood. Built with React & .NET Passion.</p>
                    </div>
                    <div className="footer-right">
                        <a href={RESUME_PATH} download className="footer-link">
                            <i className="bi bi-file-earmark-pdf-fill me-2"></i>
                            Download CV
                        </a>
                        <a href="#Contact" className="footer-link">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;