import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const ContactUs = () => {
  return (
    <>
    <Navbar />
      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">Contact Us</h1>
          <p className="lead text-muted mt-3">
            We'd love to hear from you. Have a question, feedback, or need
            assistance? Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">

            {/* Contact Details */}
            <div className="col-lg-5">
              <h2 className="fw-bold mb-4">Get In Touch</h2>

              <div className="mb-4">
                <h5>📍 Address</h5>
                <p className="text-muted">
                  123 Business Street,<br />
                  Bhubaneswar, Odisha - 751001,<br />
                  India
                </p>
              </div>

              <div className="mb-4">
                <h5>📞 Phone</h5>
                <p className="text-muted">
                  +91 98765 43210
                </p>
              </div>

              <div className="mb-4">
                <h5>📧 Email</h5>
                <p className="text-muted">
                  support@myapp.com
                </p>
              </div>

              <div className="mb-4">
                <h5>🕒 Working Hours</h5>
                <p className="text-muted">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 2:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>

              <div>
                <h5>Follow Us</h5>

                <a href="#" className="btn btn-outline-primary me-2">
                  Facebook
                </a>

                <a href="#" className="btn btn-outline-primary me-2">
                  Instagram
                </a>

                <a href="#" className="btn btn-outline-primary">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">

                  <h3 className="fw-bold mb-4">
                    Send Us a Message
                  </h3>

                  <form>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">
                          Full Name
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label">
                          Email Address
                        </label>

                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">
                        Subject
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter subject"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">
                        Message
                      </label>

                      <textarea
                        rows="5"
                        className="form-control"
                        placeholder="Write your message..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                    >
                      Send Message
                    </button>

                  </form>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;