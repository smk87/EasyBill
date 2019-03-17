import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../common/Loading";
import axios from "axios";

//Import needed actions
import {
  getCustomers,
  deleteCustomer
} from "../../store/actions/customerAction";

class BillList extends Component {
  constructor(props) {
    super();

    this.state = {
      bill: {},
      list: []
    };
  }

  componentDidMount() {
    axios.get(`/api/bill/${this.props.match.params.id}`).then(bill => {
      this.setState({ bill: bill.data, list: bill.data.bills });
      console.log(bill.data);
    });
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.customers.loading) {
      this.setState({ customers: newProps.customers.list });
    }
  }

  onClick = data => {
    if (window.confirm("Delete this customer?"))
      this.props.deleteCustomer(data);
    else console.log(data);
  };

  render() {
    //Getting row data from state
    let rowdata = this.state.list.map(bill => (
      <tr key={bill._id}>
        <th scope="row">{bill.date.slice(0, 10)}</th>
        <td>{bill.base || 0}</td>
        <td>{bill.water || 0}</td>
        <td>{bill.electricity || 0}</td>
        <td>{bill.gas || 0}</td>
        <td>{bill.waste || 0}</td>
        <td>{bill.garage || 0}</td>
        <td>
          {(bill.garage || 0) +
            (bill.waste || 0) +
            (bill.gas || 0) +
            (bill.electricity || 0) +
            (bill.water || 0) +
            (bill.base || 0)}
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
              to="/customers"
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
          <p className="text-center h3">
            Bills of {this.state.bill.customername}, {this.state.bill.position}
          </p>
          <table className="table table-striped">
            <thead>
              <tr>
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

BillList.propTypes = {
  customers: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  customers: state.customers
});

export default connect(
  mapStateToProps,
  { getCustomers, deleteCustomer }
)(BillList);
