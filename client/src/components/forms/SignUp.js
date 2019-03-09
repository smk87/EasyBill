import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-7 col-sm-6 col-md-4 col-lg-3 formspace">
            <form>
              <div className="row" style={{ "border-radius": "10px" }}>
                <h3 className="text-center mx-auto" style={{ color: "white" }}>
                  Sign Up
                </h3>
              </div>
              <hr />
              <div className="form-group row">
                <label
                  for="inputEmail3"
                  className="col-sm-3 col-form-label"
                  style={{ color: "white" }}
                >
                  Email
                </label>
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail3"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group row ">
                <label
                  for="inputPassword3"
                  className="col-sm-3 col-form-label"
                  style={{ color: "white" }}
                >
                  Password
                </label>
                <div className="col-12">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="form-group row justify-content-center">
                <div className="col-6 col-sm-4">
                  <button
                    type="submit"
                    className="btn btn-success"
                    style={{ width: "100px", "background-color": "#019031" }}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row justify-content-center">
          <a href="" style={{ color: "white" }}>
            Already have an account?
          </a>
        </div>
      </div>
    );
  }
}
