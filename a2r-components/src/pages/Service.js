import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
    <Navbar />
      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">Our Services</h1>
          <p className="lead text-muted mt-3">
            We provide innovative technology solutions to help businesses grow
            and succeed in the digital world.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">

            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="display-4 mb-3">💻</div>
                  <h4 className="fw-bold">Web Development</h4>
                  <p className="text-muted">
                    Responsive, secure, and scalable websites using modern
                    technologies like React, Node.js, and Bootstrap.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="display-4 mb-3">📱</div>
                  <h4 className="fw-bold">Mobile Applications</h4>
                  <p className="text-muted">
                    Cross-platform mobile applications with intuitive user
                    interfaces and excellent performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="display-4 mb-3">🎨</div>
                  <h4 className="fw-bold">UI / UX Design</h4>
                  <p className="text-muted">
                    Beautiful, modern, and user-friendly interfaces focused on
                    providing the best user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="display-4 mb-3">☁️</div>
                  <h4 className="fw-bold">Cloud Solutions</h4>
                  <p className="text-muted">
                    Cloud deployment, hosting, scalability, and infrastructure
                    management for modern applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="display-4 mb-3">🤖</div>
                  <h4 className="fw-bold">AI & Machine Learning</h4>
                  <p className="text-muted">
                    Intelligent solutions powered by machine learning and AI to
                    automate processes and improve decision-making.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="display-4 mb-3">🔐</div>
                  <h4 className="fw-bold">Cyber Security</h4>
                  <p className="text-muted">
                    Secure applications with authentication, authorization,
                    encryption, and best security practices.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Choose Us?</h2>
            <p className="text-muted">
              We are committed to delivering high-quality digital solutions.
            </p>
          </div>

          <div className="row text-center">

            <div className="col-md-3 mb-4">
              <h2 className="text-primary">5+</h2>
              <p className="fw-semibold">Years Experience</p>
            </div>

            <div className="col-md-3 mb-4">
              <h2 className="text-primary">200+</h2>
              <p className="fw-semibold">Projects Completed</p>
            </div>

            <div className="col-md-3 mb-4">
              <h2 className="text-primary">150+</h2>
              <p className="fw-semibold">Happy Clients</p>
            </div>

            <div className="col-md-3 mb-4">
              <h2 className="text-primary">24/7</h2>
              <p className="fw-semibold">Customer Support</p>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold">Let's Build Something Great Together</h2>

          <p className="text-muted mt-3">
            Have a project in mind? We'd love to help you bring your ideas to
            life.
          </p>

          <button className="btn btn-primary btn-lg mt-3">
            Contact Us
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;