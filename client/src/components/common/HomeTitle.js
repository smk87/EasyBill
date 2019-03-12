import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class HomeTitle extends Component {
  render() {
    if (!this.props.auth.isAuthenticated) {
      return (
        <div>
          <h1 className="text-center display-3" style={{ color: "white" }}>
            EasyBill
          </h1>
          <p className="text-center" style={{ color: "white" }}>
            Welcome to EasyBill. Sign Up or Login to easily generate bills.
          </p>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

HomeTitle.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(HomeTitle);
