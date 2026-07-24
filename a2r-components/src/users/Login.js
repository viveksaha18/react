import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h3>Login</h3>
            </div>

            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                  />
                </div>

                <button className="btn btn-primary w-100">
                  Login
                </button>
              </form>

              <div className="mt-3 text-center">
                <Link to="/forget-password">
                  Forgot Password
                </Link>
              </div>

              <div className="mt-2 text-center">
                Don't have an account?{" "}
                <Link to="/register">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;