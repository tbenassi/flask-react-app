import React, {Component} from "react";
import {connect} from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import LoginButton from "../auth/LoginButton";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props);
        const {isAuthenticated} = this.props.auth;
        const logoutButton = (
            <ul className="navbar-nav ml-auto float-right">
                <li className="nav-item">
                    <LogoutButton/>
                </li>
            </ul>

        );
        const loginButton = (
            <ul className="navbar-nav ml-auto float-right">
                <li className="nav-item">
                    <LoginButton/>
                </li>
            </ul>
        );
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#mobile-nav"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="flex-fill collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto"/>
                        {isAuthenticated ? logoutButton : loginButton}
                    </div>
                </div>
            </nav>

        );
    }


}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
)(Navbar)