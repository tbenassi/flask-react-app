import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import jwt_decode from 'jwt-decode';
import {Provider} from "react-redux";
import {Security, SecureRoute, ImplicitCallback} from "@okta/okta-react";

import './App.css';
import store from './store'
import {loginUser, logoutUser} from "./redux/actions/authActions";

import config from "./config";
import Landing from "./components/Landing";
import Dashboard from "./components/dashboards/Dashboard";
import NotFound from "./components/404/NotFound";
import Navbar from "./components/common/Navbar";

// Check form token
if (localStorage.oktaAccessToken && localStorage.oktaIdToken) {
    //Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.oktaAccessToken);

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Redirect to login
        window.location.href = "/";
    } else {
        const tokens = {idToken: localStorage.oktaIdToken, accessToken: localStorage.oktaAccessToken};
        store.dispatch(loginUser(tokens));
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Security {...config.oidc} className="App">
                        <Navbar/>
                        <Switch>
                            <Route exact path="/" component={Landing}/>
                            <Route path="/authorization-code/callback" component={ImplicitCallback}/>
                            <SecureRoute exact path="/dashboard" component={Dashboard}/>
                            <Route component={NotFound} status={404}/>
                        </Switch>
                    </Security>
                </Router>
            </Provider>
        )
    }
}

export default App;
