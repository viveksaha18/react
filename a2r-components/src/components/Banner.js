import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center min-vh-75">

          {/* Left Content */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <span className="badge bg-primary mb-3 px-3 py-2">
              🚀 Welcome to MyApp
            </span>

            <h1 className="display-4 fw-bold mb-4">
              Build Amazing
              <span className="text-primary"> Web Applications</span>
            </h1>

            <p className="lead text-muted mb-4">
              Create modern, responsive, and scalable web applications with
              cutting-edge technologies. Experience seamless performance and
              beautiful user interfaces.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <Link to="/get-started" className="btn btn-primary btn-lg">
                Get Started
              </Link>

              <Link to="/about" className="btn btn-outline-primary btn-lg">
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="row mt-5 text-center">
              <div className="col-4">
                <h3 className="fw-bold text-primary">10K+</h3>
                <p className="text-muted mb-0">Users</p>
              </div>

              <div className="col-4">
                <h3 className="fw-bold text-primary">100+</h3>
                <p className="text-muted mb-0">Projects</p>
              </div>

              <div className="col-4">
                <h3 className="fw-bold text-primary">24/7</h3>
                <p className="text-muted mb-0">Support</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
              alt="Banner"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;