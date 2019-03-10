import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../store/actions/authAction";
import { withRouter } from "react-router-dom";
import { stat } from "fs";
import Form1 from "../inputs/Form1";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //After pressing Sign Up button
  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-7 col-sm-6 col-md-4 col-lg-3 formspace">
            <form onSubmit={this.onSubmit}>
              <div className="row" style={{ borderRadius: "10px" }}>
                <h3 className="text-center mx-auto" style={{ color: "white" }}>
                  Sign Up
                </h3>
              </div>
              <hr />
              <Form1
                style={{ color: "white" }}
                label="Username"
                name="username"
                type="username"
                placeholder="Enter Your Desired Username"
                value={this.state.username}
                error={this.props.errors.username}
                onChange={this.onChange}
              />
              <Form1
                style={{ color: "white" }}
                label="Password"
                name="password"
                type="password"
                placeholder="Enter Your Desired Password"
                value={this.state.password}
                error={this.props.errors.password}
                onChange={this.onChange}
              />

              <div className="form-group row justify-content-center">
                <div className="col-6 col-sm-4">
                  <button
                    type="submit"
                    value="submit"
                    className="btn btn-success"
                    style={{ width: "100px", backgroundColor: "#019031" }}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row justify-content-center">
          <Link to="/login" style={{ color: "white" }}>
            Already have an account?
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(SignUp));
