import './Contact.css';

const Contact = () => {
    return (
        <section id="Contact" className="contact-section">
            <div className="container">
                <h2 className="section-title text-center mb-5">
                    Get In <span className="text-emerald">Touch</span>
                </h2>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="contact-card-premium">
                            <div className="contact-info">
                                <div className="contact-item">
                                    <div className="contact-icon-box me-3">
                                        <i className="bi bi-envelope-fill"></i>
                                    </div>
                                    <div>
                                        <p className="label">Email</p>
                                        <a href="mailto:siddarood005@gmail.com" className="value">siddarood005@gmail.com</a>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon-box me-3">
                                        <i className="bi bi-linkedin"></i>
                                    </div>
                                    <div>
                                        <p className="label">LinkedIn</p>
                                        <a href="https://www.linkedin.com/in/siddarood-gumashetti-5456a6203" target="_blank" rel="noreferrer" className="value">Siddarood Gumashetti</a>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon-box me-3">
                                        <i className="bi bi-geo-alt-fill"></i>
                                    </div>
                                    <div>
                                        <p className="label">Location</p>
                                        <span className="value">Vijayapura, Karnataka</span>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-cta">
                                <h3>Let's build something together!</h3>
                                <p>I am currently open to new opportunities in .NET and Full Stack Development.</p>
                                <a href="mailto:siddarood005@gmail.com" className="btn-contact">
                                    Send Message <i className="bi bi-send-fill ms-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;