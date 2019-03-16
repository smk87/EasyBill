import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Form1 from "../inputs/Form1";
import axios from "axios";

//Import needed actions
import { editCustomer } from "../../store/actions/customerAction";
import Loading from "../common/Loading";

class EditCustomer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "",
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

  //After pressing Add Customer button
  onSubmit = e => {
    e.preventDefault();

    const newCus = {
      current: this.state.current,
      customername: this.state.customername,
      meterno: this.state.meterno,
      position: this.state.position,
      waterbill: this.state.waterbill,
      electricitybill: this.state.electricitybill,
      gasbill: this.state.gasbill,
      garagebill: this.state.garagebill,
      wastebill: this.state.wastebill,
      basebill: this.state.basebill,
      id: this.props.match.params.id
    };

    this.props.editCustomer(newCus, this.props.history);
  };

  componentDidMount() {
    axios
      .get(`/api/customer/${this.props.match.params.id}`)
      .then(customer => {
        const upCus = customer.data[0];
        this.setState({
          current: upCus.current,
          customername: upCus.customername,
          meterno: upCus.meterno || "",
          position: upCus.position,
          waterbill: upCus.waterbill || "",
          electricitybill: upCus.electricitybill || "",
          gasbill: upCus.gasbill || "",
          garagebill: upCus.garagebill || "",
          wastebill: upCus.wastebill || "",
          basebill: upCus.basebill || ""
        });
      })
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    this.props.customers.updatedCustomer = false;
  }

  render() {
    //Set Loading GIF
    let loading = "";
    if (this.props.customers.loading) {
      loading = <Loading />;
    }

    //Set Success Message
    let success = "";
    if (this.props.customers.updatedCustomer) {
      success = (
        <h4 className="text-center mx-auto" style={{ color: "#7CEC9F" }}>
          Updated Customer Successfully.
        </h4>
      );
    }

    let current = "";
    if (this.state.current === true) {
      current = <h4 className="badge badge-success">Yes</h4>;
    }
    if (this.state.current === false) {
      current = <h4 className="badge badge-danger">No</h4>;
    }

    //Set select component
    let selected = "";
    if (this.state.current) {
      selected = (
        <select
          name="current"
          className="custom-select"
          id="inputGroupSelect01"
          onChange={this.onChange}
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      );
    }
    if (!this.state.current) {
      selected = (
        <select
          name="current"
          className="custom-select"
          id="inputGroupSelect01"
          onChange={this.onChange}
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
      );
    }

    return (
      <div>
        <div className="row">
          <div
            className="col-3 mt-4"
            style={{ marginLeft: "30px", marginBottom: "-40px" }}
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
        {loading} {success}
        <div className="row justify-content-center">
          <div
            className="col-7 col-sm-6 col-md-4 col-lg-3 mt-5 formspace"
            style={{ backgroundColor: "#EAF0F1" }}
          >
            <form onSubmit={this.onSubmit}>
              <div className="row" style={{ borderRadius: "10px" }}>
                <h3 className="text-center mx-auto" style={{ color: "black" }}>
                  Edit Customer
                </h3>
              </div>
              <hr />

              <div className="form-group row ">
                <label
                  className="col-sm-3 col-form-label"
                  style={this.props.style}
                >
                  Currently Staying?
                </label>
                <div className="col-12">
                  {current}
                  {selected}
                </div>
              </div>
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

EditCustomer.propTypes = {
  customers: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  customers: state.customers,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { editCustomer }
)(EditCustomer);
