import React, {Component} from "react";
import {compose} from "redux";
import {withAuth} from "@okta/okta-react";
import {connect} from "react-redux";
import {loginUser} from "../redux/actions/authActions";
import logo from "../img/logo.svg";
import LoginButton from "./auth/LoginButton";

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {authenticated: null};
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.checkAuthentication();
    }

    async checkAuthentication() {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated && authenticated === true) {
            const tokens = {
                idToken: await this.props.auth.getIdToken(),
                accessToken: await this.props.auth.getAccessToken()
            };
            this.props.loginUser(tokens);
            this.props.history.push('/dashboard')
        }
    }

    componentDidMount() {
        this.checkAuthentication();
    }

    render() {
        return (
            <div className="Landing">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <LoginButton />
                </header>
            </div>
        );
    }

}

const mapStateToProps = state => ({});

export default compose(
    withAuth,
    connect(
        mapStateToProps,
        {loginUser}
    )
)(Landing);

