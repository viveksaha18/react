import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-top mt-5">
      <div className="container py-5">
        <div className="row">

          {/* Company Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h4 className="fw-bold text-primary">MyApp</h4>
            <p className="text-muted mt-3">
              MyApp is a modern web platform built to provide users with an
              intuitive and seamless experience. We focus on performance,
              security, and user-friendly design.
            </p>

            <p className="mb-1">
              <strong>Email:</strong> support@myapp.com
            </p>

            <p className="mb-1">
              <strong>Phone:</strong> +91 98765 43210
            </p>

            <p className="mb-0">
              <strong>Location:</strong> Bhubaneswar, Odisha, India
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-semibold mb-3">Quick Links</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-decoration-none text-muted">
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/about" className="text-decoration-none text-muted">
                  About
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/services" className="text-decoration-none text-muted">
                  Services
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/contact" className="text-decoration-none text-muted">
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/faq" className="text-decoration-none text-muted">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-semibold mb-3">Our Services</h5>

            <ul className="list-unstyled text-muted">
              <li className="mb-2">✔ Web Development</li>
              <li className="mb-2">✔ Mobile Applications</li>
              <li className="mb-2">✔ UI/UX Design</li>
              <li className="mb-2">✔ Cloud Solutions</li>
              <li className="mb-2">✔ AI & Machine Learning</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-semibold mb-3">Newsletter</h5>

            <p className="text-muted">
              Subscribe to receive the latest updates, news, and offers.
            </p>

            <form>
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Enter your email"
              />

              <button className="btn btn-primary w-100">
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-top">
        <div className="container py-3">
          <div className="row align-items-center">

            <div className="col-md-6 text-center text-md-start">
              <small className="text-muted">
                © {new Date().getFullYear()} MyApp. All Rights Reserved.
              </small>
            </div>

            <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
              <Link
                to="/privacy"
                className="text-decoration-none text-muted me-3"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-decoration-none text-muted me-3"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/support"
                className="text-decoration-none text-muted"
              >
                Support
              </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;