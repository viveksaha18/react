import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: "$899",
      image: "https://picsum.photos/400/300?random=1",
      description: "High-performance laptop suitable for work, coding, and gaming.",
    },
    {
      id: 2,
      name: "Smartphone",
      price: "$699",
      image: "https://picsum.photos/400/300?random=2",
      description: "Latest smartphone with an amazing camera and long-lasting battery.",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: "$199",
      image: "https://picsum.photos/400/300?random=3",
      description: "Track your fitness, notifications, and health with ease.",
    },
    {
      id: 4,
      name: "Wireless Headphones",
      price: "$149",
      image: "https://picsum.photos/400/300?random=4",
      description: "Crystal-clear sound quality with active noise cancellation.",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: "$99",
      image: "https://picsum.photos/400/300?random=5",
      description: "Portable speaker with immersive sound and powerful bass.",
    },
    {
      id: 6,
      name: "Gaming Mouse",
      price: "$59",
      image: "https://picsum.photos/400/300?random=6",
      description: "Ergonomic RGB gaming mouse with programmable buttons.",
    },
  ];

  return (
    <>
    <Navbar />
      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">Our Products</h1>
          <p className="lead text-muted mt-3">
            Explore our premium collection of high-quality products designed to
            meet your everyday needs.
          </p>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {products.map((product) => (
              <div className="col-lg-4 col-md-6" key={product.id}>
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                    style={{ height: "230px", objectFit: "cover" }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h4 className="fw-bold">{product.name}</h4>

                    <h5 className="text-primary">{product.price}</h5>

                    <p className="text-muted flex-grow-1">
                      {product.description}
                    </p>

                    <button className="btn btn-primary w-100">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Buy From Us?</h2>
            <p className="text-muted">
              We provide quality products with exceptional customer service.
            </p>
          </div>

          <div className="row text-center">
            <div className="col-md-3">
              <h2>🚚</h2>
              <h5>Free Shipping</h5>
            </div>

            <div className="col-md-3">
              <h2>💳</h2>
              <h5>Secure Payment</h5>
            </div>

            <div className="col-md-3">
              <h2>🔄</h2>
              <h5>Easy Returns</h5>
            </div>

            <div className="col-md-3">
              <h2>⭐</h2>
              <h5>Premium Quality</h5>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold">Need Help Choosing a Product?</h2>

          <p className="text-muted mt-3">
            Our experts are here to help you find the perfect product for your
            needs.
          </p>

          <button className="btn btn-primary btn-lg mt-3">
            Contact Sales
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Products;