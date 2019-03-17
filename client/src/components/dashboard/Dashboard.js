import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { getCustomers } from "../../store/actions/customerAction";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      customers: []
    };
  }

  componentDidMount() {
    this.setState({ username: this.props.auth.user.username });
    this.props.getCustomers();
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.customers.loading) {
      this.setState({ customers: newProps.customers.list });
    }
  }

  render() {
    //Getting row data from state via Redux
    let rowdata = this.state.customers.map(customer => (
      <tr key={customer._id}>
        <th scope="row">{customer.customername}</th>
        <td>{customer.position}</td>
        <td>{customer.bills[0].date.slice(0, 10)}</td>
        <td>{customer.bills[0].base || 0}</td>
        <td>{customer.bills[0].water || 0}</td>
        <td>{customer.bills[0].electricity || 0}</td>
        <td>{customer.bills[0].gas || 0}</td>
        <td>{customer.bills[0].waste || 0}</td>
        <td>{customer.bills[0].garage || 0}</td>
        <td>
          {(customer.bills[0].garage || 0) +
            (customer.bills[0].waste || 0) +
            (customer.bills[0].gas || 0) +
            (customer.bills[0].electricity || 0) +
            (customer.bills[0].water || 0) +
            (customer.bills[0].base || 0)}
        </td>
      </tr>
    ));

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
          <Link to="/generate" className="btn btn-custom ml-5">
            Generate Bills
          </Link>
          <Link to="/customers" className="btn btn-custom ml-5">
            Customer List
          </Link>
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
                <th scope="col">Date</th>
                <th scope="col">Base Bill</th>
                <th scope="col">Water Bill</th>
                <th scope="col">Electrecity Bill</th>
                <th scope="col">Gas Bill</th>
                <th scope="col">Waste Bill</th>
                <th scope="col">Garage Bill</th>
                <th scope="col">Total Bill</th>
              </tr>
            </thead>
            <tbody>{rowdata}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  customers: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  customers: state.customers
});

export default connect(
  mapStateToProps,
  { getCustomers }
)(Dashboard);
