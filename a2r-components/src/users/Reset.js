import React from "react";
import { Link } from "react-router-dom";

const Reset = () => {
  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-header bg-success text-white text-center">
              <h3>Reset Password</h3>
            </div>

            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label>New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="New Password"
                  />
                </div>

                <div className="mb-3">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                </div>

                <button className="btn btn-success w-100">
                  Reset Password
                </button>
              </form>

              <div className="text-center mt-3">
                <Link to="/login">Back to Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;