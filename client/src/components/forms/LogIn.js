import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LogIn extends Component {
  render() {
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-7 col-sm-6 col-md-4 col-lg-3 formspace">
            <form>
              <div className="row" style={{ "border-radius": "10px" }}>
                <h3 className="text-center mx-auto" style={{ color: "white" }}>
                  Log In
                </h3>
              </div>
              <hr />
              <div className="form-group row">
                <label
                  for="inputEmail3"
                  className="col-sm-3 col-form-label"
                  style={{ color: "white" }}
                >
                  Username
                </label>
                <div className="col-12">
                  <input
                    type="text"
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
                    Log In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row justify-content-center">
          <Link to="/signup" style={{ color: "white" }}>
            Dont have an account?
          </Link>
        </div>
      </div>
    );
  }
}
