import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Initialize Redux
import { Provider } from "react-redux";
import store from "./store/store";

import logo from "./logo.svg";
import "./App.css";

//Import all component
import NavBar from "./components/Layout/NavBar";
import SignUp from "./components/forms/SignUp";
import LogIn from "./components/forms/LogIn";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
              <Route exact path="/" component={SignUp} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={LogIn} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
