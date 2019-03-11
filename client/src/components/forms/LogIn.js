import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import needed components
import Form1 from "../inputs/Form1";
//Import needed actions
import { loginUser } from "../../store/actions/authAction";

class LogIn extends Component {
  constructor(props) {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //After pressing Log In button
  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.loginUser(newUser, this.props.history);
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      //Redirect to dashboard if logged in
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-7 col-sm-6 col-md-4 col-lg-3 formspace">
            <form onSubmit={this.onSubmit}>
              <div className="row" style={{ borderRadius: "10px" }}>
                <h3 className="text-center mx-auto" style={{ color: "white" }}>
                  Log In
                </h3>
              </div>
              <hr />
              <Form1
                style={{ color: "white" }}
                label="Username"
                name="username"
                type="text"
                placeholder="Enter Your Username"
                value={this.state.username}
                error={this.props.errors.username}
                onChange={this.onChange}
              />
              <Form1
                style={{ color: "white" }}
                label="Password"
                name="password"
                type="password"
                placeholder="Enter Your Password"
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
                    style={{
                      width: "100px",
                      backgroundColor: "#019031"
                    }}
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

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(LogIn);
