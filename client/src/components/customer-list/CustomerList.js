import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../common/Loading";

//Import needed actions
import { getCustomers } from "../../store/actions/customerAction";

class CustomerList extends Component {
  constructor(props) {
    super();

    this.state = {
      customers: []
    };
  }

  componentDidMount() {
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
        <td>{customer.meterno}</td>
        <td>
          <Link to="" className="btn btn-success">
            View Bills
          </Link>
          <Link to="" className="btn btn-primary ml-3">
            Edit
          </Link>
          <Link to="" className="btn btn-danger ml-3">
            Delete
          </Link>
        </td>
      </tr>
    ));

    return (
      <div>
        <div className="row">
          <div
            className="col-3 mt-4"
            style={{ marginLeft: "30px", marginBottom: "-10px" }}
          >
            <Link
              to="/dashboard"
              className="btn btn-secondary"
              style={{ width: "85px" }}
            >
              Back
            </Link>
          </div>
        </div>
        <div
          className="table-responsive tableback mx-auto"
          style={{ width: "70%" }}
        >
          <p className="text-center h3">List Of All Customers</p>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Postion</th>
                <th scope="col">Meter No</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>{rowdata}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

CustomerList.propTypes = {
  //   customers: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  customers: state.customers
});

export default connect(
  mapStateToProps,
  { getCustomers }
)(CustomerList);
