import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default class Form1 extends Component {
  render() {
    return (
      <div className="form-group row ">
        <label className="col-sm-3 col-form-label" style={this.props.style}>
          {this.props.label}
        </label>
        <div className="col-12">
          <input
            name={this.props.name}
            type={this.props.type}
            className={classnames("form-control", {
              "is-invalid": this.props.error
            })}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}
          />
          {this.props.error && (
            <div className="invalid-feedback">{this.props.error}</div>
          )}
        </div>
      </div>
    );
  }
}

Form1.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};
