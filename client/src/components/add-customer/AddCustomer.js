import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Form1 from "../inputs/Form1";

//Import needed actions
import { addCustomer } from "../../store/actions/billAction";

class AddCustomer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customername: "",
      meterno: "",
      position: "",
      basebill: "",
      gasbill: "",
      waterbill: "",
      wastebill: "",
      garagebill: "",
      electricitybill: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //After pressing Log In button
  onSubmit = e => {
    e.preventDefault();

    const newCus = {
      customername: this.state.customername,
      meterno: this.state.meterno,
      position: this.state.position,
      waterbill: this.state.waterbill,
      electricitybill: this.state.electricitybill,
      gasbill: this.state.gasbill,
      garagebill: this.state.garagebill,
      wastebill: this.state.wastebill,
      basebill: this.state.basebill
    };

    this.props.addCustomer(newCus, this.props.history);
  };

  render() {
    return (
      <div>
        <div className="row justify-content-center">
          <div
            className="col-7 col-sm-6 col-md-4 col-lg-3 mt-5 formspace"
            style={{ backgroundColor: "#EAF0F1" }}
          >
            <form onSubmit={this.onSubmit}>
              <div className="row" style={{ borderRadius: "10px" }}>
                <h3 className="text-center mx-auto" style={{ color: "black" }}>
                  Add Customer
                </h3>
              </div>
              <hr />
              <Form1
                style={{ color: "black" }}
                label="Customer Name"
                name="customername"
                type="text"
                placeholder="*Enter Customer Name"
                value={this.state.customername}
                error={this.props.errors.customername}
                onChange={this.onChange}
              />
              <Form1
                style={{ color: "black" }}
                label="Meter No"
                name="meterno"
                type="text"
                placeholder="Enter Electricity Meter No"
                value={this.state.meterno}
                onChange={this.onChange}
              />
              <Form1
                style={{ color: "black" }}
                label="Position"
                name="position"
                type="text"
                placeholder="*Enter Unit Position"
                value={this.state.position}
                error={this.props.errors.position}
                onChange={this.onChange}
              />
              <Form1
                style={{ color: "black" }}
                label="Base Bill"
                name="basebill"
                type="number"
                placeholder="Enter Base Bill"
                value={this.state.basebill}
                onChange={this.onChange}
              />
              <Form1
                style={{ color: "black" }}
                label="Water Bill"
                name="waterbill"
                type="number"
                placeholder="Enter Water Bill"
                value={this.state.waterbill}
                onChange={this.onChange}
              />
              <Form1
                style={{ color: "black" }}
                label="Electricity Bill"
                name="electricitybill"
                type="number"
                placeholder="Enter Electricity Bill"
                value={this.state.electricitybill}
                onChange={this.onChange}
              />
              <Form1
                style={{ color: "black" }}
                label="Gas Bill"
                name="gasbill"
                type="number"
                placeholder="Enter Gas Bill"
                value={this.state.gasbill}
                onChange={this.onChange}
              />
              <Form1
                style={{ color: "black" }}
                label="Garage Bill"
                name="garagebill"
                type="number"
                placeholder="Enter Garage Bill"
                value={this.state.garagebill}
                onChange={this.onChange}
              />
              <Form1
                style={{ color: "black" }}
                label="Waste Bill"
                name="wastebill"
                type="number"
                placeholder="Enter Waste Bill"
                value={this.state.wastebill}
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
                    Add Customer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bills: state.bills,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { addCustomer }
)(AddCustomer);
