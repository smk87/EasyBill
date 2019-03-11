import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../store/actions/authAction";

class NavBar extends Component {
  onClick = () => {
    this.props.logoutUser();
  };

  render() {
    //Setting Home or Dashboard
    let dashElement = "";
    if (this.props.auth.isAuthenticated) {
      dashElement = (
        <Link className="nav-link" to="/dashboard">
          Dashboard <span className="sr-only" />
        </Link>
      );
    } else {
      dashElement = (
        <Link className="nav-link" to="/">
          Home <span className="sr-only" />
        </Link>
      );
    }

    // Setting Sign Up, Log In or Log Out
    let navElement = "";
    if (this.props.auth.isAuthenticated) {
      navElement = (
        <li className="nav-item active">
          <Link onClick={this.onClick} className="nav-link" to="#">
            Log Out <span className="sr-only" />
          </Link>
        </li>
      );
    } else {
      navElement = (
        <React.Fragment>
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Sign Up
              <span className="sr-only" />
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/login" className="nav-link">
              Log In
              <span className="sr-only" />
            </Link>
          </li>
        </React.Fragment>
      );
    }
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark sticky-top"
        style={{ backgroundColor: "#0A3D62" }}
      >
        <div
          className="navbar-brand"
          style={{ color: "white", fontSize: "30px" }}
        >
          EasyBill
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">{dashElement}</li>
          </ul>
          <ul className="navbar-nav ml-auto">{navElement}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(NavBar);
