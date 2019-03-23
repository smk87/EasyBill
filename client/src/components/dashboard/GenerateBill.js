import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../common/Loading";
import Form1 from "../inputs/Form1";

//Import needed actions
import {
  getCustomers,
  deleteCustomer
} from "../../store/actions/customerAction";
import { generateBill } from "../../store/actions/billAction";

class GenerateBill extends Component {
  constructor(props) {
    super();

    this.state = {
      customers: [],
      id: [],
      electricitybill: [],
      waterbill: []
    };
  }

  componentDidMount() {
    this.props.getCustomers();
  }

  componentWillUnmount() {
    this.props.bills.generateBillSuccess = false;
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.customers.loading) {
      this.setState({ customers: newProps.customers.list });
    }
  }

  onChange = (e, id, bill, wbill, index) => {
    e.preventDefault();

    this.state.electricitybill[index] = bill;
    this.state.waterbill[index] = wbill;
    this.state.id[index] = id;
    console.log(this.state.waterbill);
  };

  onClick = (id, bill, wbill) => {
    this.props.generateBill(id, bill, wbill);
  };

  genAll = (bills, wbills, ids) => {
    bills.map((bill, index) =>
      this.props.generateBill(ids[index], bill, wbills[index])
    );
  };

  render() {
    //Getting row data from state via Redux
    let rowdata = this.state.customers.map((customer, index) => {
      return (
        <tr key={customer._id}>
          <th scope="row">{customer.customername}</th>
          <td>{customer.position}</td>
          <td>{customer.meterno}</td>
          <td>
            <input
              name="bill"
              type="number"
              className="form-control"
              placeholder="Enter New Electricity Bill"
              onChange={e =>
                this.onChange(
                  e,
                  customer._id,
                  document.getElementsByName("bill")[index].value,
                  document.getElementsByName("wbill")[index].value,
                  index
                )
              }
            />
            <input
              name="wbill"
              type="number"
              className="form-control"
              placeholder="Enter New Water Bill"
              onChange={e =>
                this.onChange(
                  e,
                  customer._id,
                  document.getElementsByName("bill")[index].value,
                  document.getElementsByName("wbill")[index].value,
                  index
                )
              }
            />
          </td>
          <td>
            <button
              onClick={() =>
                this.onClick(
                  customer._id,
                  document.getElementsByName("bill")[index].value,
                  document.getElementsByName("wbill")[index].value
                )
              }
              className="btn btn-success"
            >
              Generate
            </button>
          </td>
        </tr>
      );
    });

    //Generate success msg
    let success = "";
    if (this.props.bills.generateBillSuccess) {
      success = (
        <h4 className="text-center mx-auto" style={{ color: "#7CEC9F" }}>
          Generated Bill Successfully.
        </h4>
      );
    }
    if (this.props.bills.loading) {
      success = <Loading />;
    }
    return (
      <div>
        <div className="row">
          <div
            className="col-3 mt-4"
            style={{
              marginLeft: "30px",
              marginBottom: "-10px"
            }}
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
        {success}
        <div
          className="table-responsive tableback mx-auto"
          style={{ width: "50%" }}
        >
          <p className="text-center h3">Generate Bills</p>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Postion</th>
                <th scope="col">Meter No</th>
                <th scope="col">New Electric Bill</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>{rowdata}</tbody>
          </table>
        </div>
        <button
          onClick={() =>
            this.genAll(
              this.state.electricitybill,
              this.state.waterbill,
              this.state.id
            )
          }
          className="btn btn-success mt-2"
        >
          Generate All
        </button>
      </div>
    );
  }
}

GenerateBill.propTypes = {
  customers: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  customers: state.customers,
  bills: state.bills
});

export default connect(
  mapStateToProps,
  { getCustomers, deleteCustomer, generateBill }
)(GenerateBill);
