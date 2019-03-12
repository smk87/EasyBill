import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };
  }

  componentDidMount() {
    this.setState({ username: this.props.auth.user.username });
  }

  render() {
    return (
      <div>
        <div
          className="row justify-content-center"
          style={{ marginTop: "150px" }}
        >
          <h1 style={{ color: "white" }}>
            Welcome,{" "}
            <span style={{ color: "#74B9FF" }}>{this.state.username}</span>
          </h1>
        </div>
        <div className="row justify-content-center mt-4">
          <Link to="/add-customer" className="btn btn-custom">
            Add Customer
          </Link>
          <a href="" className="btn btn-custom ml-5">
            Generate Bills
          </a>
          <a href="" className="btn btn-custom ml-5">
            Edit Customer
          </a>
        </div>
        <div
          className="table-responsive tableback mx-auto"
          style={{ width: "70%" }}
        >
          <p className="text-center h3">Latest Bills</p>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Postion</th>
                <th scope="col">Month</th>
                <th scope="col">Base Bill</th>
                <th scope="col">Water Bill</th>
                <th scope="col">Electrecity Bill</th>
                <th scope="col">Gas Bill</th>
                <th scope="col">Other Bill</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>February</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <button className="btn btn-primary">Click</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Dashboard);
