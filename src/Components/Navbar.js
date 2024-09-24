import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);  // State to manage navbar collapse

    const handleToggle = () => {
        setIsOpen(!isOpen);  // Toggle the dropdown menu
    };

    const handleClose = () => {
        setIsOpen(false);  // Close dropdown after clicking a link
    };
    

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link className="navbar-brand" to="/" onClick={handleClose}>
                <img src="https://naveen027.github.io/naveen-portfolio/logo.png" alt="Logo" />
            </Link>
            <button className="navbar-toggler" type="button" onClick={handleToggle}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" onClick={handleClose}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About" onClick={handleClose}>Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Services" onClick={handleClose}>Career</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" onClick={handleClose}>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" onClick={handleClose}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
