import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { setCurrentUser, logoutUser } from "./store/actions/authAction";

//Initialize Redux
import { Provider } from "react-redux";
import store from "./store/store";
import setAuthToken from "./store/actions/setAuthToken";
import jwt_decode from "jwt-decode";

import "./App.css";

//Import all component
import NavBar from "./components/Layout/NavBar";
import SignUp from "./components/forms/SignUp";
import LogIn from "./components/forms/LogIn";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/common/PrivateRoute";

//Check for token
if (localStorage.jwtToken) {
  //Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //Logout user
    store.dispatch(logoutUser());
    //Redirect to login
    window.location.href = "/login";
  }
}

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
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;