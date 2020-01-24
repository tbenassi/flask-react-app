import React, {Component} from "react";
import {withAuth} from "@okta/okta-react";
import {compose} from "redux";
import {connect} from "react-redux";
import {logoutUser} from "../../redux/actions/authActions";

class LogoutButton extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    async logout() {
        this.props.logoutUser();
        await this.props.auth.logout('/')
    }

    render() {
        return (
            <button className="btn btn-lg btn-light" onClick={this.logout}>
                Logout
            </button>
        )
    }
}

const mapStateToProps = () => ({});
export default compose(
    withAuth,
    connect(
        mapStateToProps,
        {logoutUser}
    )
)(LogoutButton)