import React, {Component} from "react";
import {withAuth} from "@okta/okta-react";

export default withAuth(class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    async login() {
        this.props.auth.login('/')
    }

    render() {
        return (
            <button className="btn btn-lg btn-light" onClick={this.login}>
                Login
            </button>
        )
    }
});