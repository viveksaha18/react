import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Features</h2>
            <p className="text-muted">
              We provide everything you need to build modern web applications.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <h1>⚡</h1>
                  <h5 className="fw-bold mt-3">Fast Performance</h5>
                  <p className="text-muted">
                    Optimized for speed and seamless user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <h1>🔒</h1>
                  <h5 className="fw-bold mt-3">Secure</h5>
                  <p className="text-muted">
                    Built with modern security standards and best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <h1>📱</h1>
                  <h5 className="fw-bold mt-3">Responsive</h5>
                  <p className="text-muted">
                    Looks perfect on desktop, tablet, and mobile devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
                alt="About"
                className="img-fluid rounded shadow"
              />
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <h2 className="fw-bold">About Us</h2>

              <p className="text-muted mt-3">
                We develop modern, secure, and scalable web applications using
                the latest technologies to help businesses grow.
              </p>

              <button className="btn btn-primary mt-3">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold">Ready to Get Started?</h2>

          <p className="text-muted mt-3">
            Join thousands of users and start your journey today.
          </p>

          <button className="btn btn-primary btn-lg">
            Get Started
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;