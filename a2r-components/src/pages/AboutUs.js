import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">About Us</h1>
          <p className="lead text-muted mt-3">
            We are passionate about building innovative, secure, and scalable
            web applications that empower businesses and individuals.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Image */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
                alt="About Us"
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Text */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">Who We Are</h2>

              <p className="text-muted">
                Our mission is to deliver high-quality software solutions that
                are fast, secure, and user-friendly. We combine modern
                technologies with creative problem-solving to help businesses
                achieve their goals.
              </p>

              <p className="text-muted">
                From responsive websites to enterprise-level applications, we
                focus on creating products that provide exceptional user
                experiences and long-term value.
              </p>

              <button className="btn btn-primary mt-3">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row g-4">

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <h2>🎯</h2>
                  <h4 className="fw-bold mt-3">Our Mission</h4>
                  <p className="text-muted">
                    Deliver reliable, innovative, and scalable digital
                    solutions that make technology accessible to everyone.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <h2>🚀</h2>
                  <h4 className="fw-bold mt-3">Our Vision</h4>
                  <p className="text-muted">
                    To become a trusted technology partner by creating impactful
                    digital experiences across industries.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <h2>🤝</h2>
                  <h4 className="fw-bold mt-3">Our Values</h4>
                  <p className="text-muted">
                    Integrity, innovation, collaboration, and customer
                    satisfaction are at the core of everything we do.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">

            <div className="col-md-3 mb-4">
              <h2 className="fw-bold text-primary">500+</h2>
              <p className="text-muted">Projects Completed</p>
            </div>

            <div className="col-md-3 mb-4">
              <h2 className="fw-bold text-primary">300+</h2>
              <p className="text-muted">Happy Clients</p>
            </div>

            <div className="col-md-3 mb-4">
              <h2 className="fw-bold text-primary">50+</h2>
              <p className="text-muted">Expert Team Members</p>
            </div>

            <div className="col-md-3 mb-4">
              <h2 className="fw-bold text-primary">10+</h2>
              <p className="text-muted">Years of Experience</p>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;