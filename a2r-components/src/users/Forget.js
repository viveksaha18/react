import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Forget = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);

    // Later you'll call your backend API here.

    // For now, navigate to the Reset Password page.
    navigate("/reset-password");
  };

  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-header bg-warning text-dark text-center">
              <h3>Forgot Password</h3>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter registered email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-warning w-100"
                >
                  Send Reset Link
                </button>
              </form>

              <div className="text-center mt-3">
                <Link to="/" className="text-decoration-none">
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forget;