import { RESUME_PATH } from '../../constants'
import ThemeToggle from '../../ThemeToggle/ThemeToggle'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top portfolio-navbar">
            <div className="container">
                {/* Brand */}
                <a className="navbar-brand brand" href="#">
                    <span className="text-emerald">S</span>iddarood
                </a>



                {/* Hamburger Button */}
                <button
                    className="navbar-toggler custom-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto nav-links-list">
                        <li className="nav-item"><a className="nav-link" href="#Experience">Experience</a></li>
                        <li className="nav-item"><a className="nav-link" href="#Skills">Skills</a></li>

                        <li className="nav-item">
                            <a className="nav-link resume-nav-link" href={RESUME_PATH} download>
                                <i className="bi bi-file-earmark-arrow-down me-1"></i> Resume
                            </a>
                        </li>

                        <li className="nav-item ms-lg-3">
                            <a className="nav-link contact-btn" href="#Contact">Contact</a>
                        </li>
                        {/* THEME DROPDOWN - Added at the end */}
                        <li className="nav-item dropdown ms-lg-3 mt-3 mt-lg-0">
                            <ThemeToggle />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar