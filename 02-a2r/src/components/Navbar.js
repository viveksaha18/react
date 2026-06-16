import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav gap-5">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About Us
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/Service">
                                Services
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/ContactUs">
                                Contact Us
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;