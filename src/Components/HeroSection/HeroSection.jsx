
import { RESUME_PATH } from '../../constants'
import { MY_IMAGE_PATH } from '../../constants'

import './HeroSection.css'


const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center min-vh-100 py-5">

                    {/* Left content: Text & Terminal */}
                    <div className="col-lg-7 col-md-12 text-center text-lg-start">
                        <div className="hero-content">
                            <h1 className="display-3 fw-bold mb-3">
                                Siddarood
                                <br />
                                <span className="title-span">Full Stack .NET Developer</span>
                            </h1>

                            <p className="hero-description mb-4 lead">
                                Building scalable backend systems and modern web
                                applications with .NET, React, and Cloud technologies.
                            </p>

                            {/* Minimalist Terminal inside the text column */}
                            <div className="hero-terminal-mini mb-4">
                                <pre className="terminal-body-mini">
                                    {`> .NET Core Developer
> React & Bootstrap UI
> AWS Cloud Enthusiast`}
                                </pre>
                            </div>

                            <div className="hero-actions d-flex gap-3 justify-content-center justify-content-lg-start">
                                <a href="#Experience" className="btn btn-custom btn-primary-glow">
                                    View Experience
                                </a>
                                <a href={RESUME_PATH} download className="btn btn-custom btn-outline-white">
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right content: Clean Professional Portrait */}
                    <div className="col-lg-5 col-md-12 d-flex justify-content-center mt-5 mt-lg-0">
                        <div className="hero-portrait-container">
                            <div className="portrait-frame">
                                <img src={MY_IMAGE_PATH} alt="Siddarood" className="portrait-img" />
                            </div>
                            {/* Suble Accent Geometry */}
                            <div className="portrait-accent-box"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection