import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

//Import all component
import NavBar from "./components/Layout/NavBar";
import SignUp from "./components/forms/SignUp";
import LogIn from "./components/forms/LogIn";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <h1 className="text-center display-3" style={{ color: "white" }}>
            EasyBill
          </h1>
          <p className="text-center" style={{ color: "white" }}>
            Welcome to EasyBill. Sign Up or Login to easily generate bills.
          </p>
          <div className="container-fluid">
            <SignUp />
            <Route exact path="/login" component={LogIn} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
