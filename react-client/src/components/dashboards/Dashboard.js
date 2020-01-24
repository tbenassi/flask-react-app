import React, {Component} from "react";
import logo from "../../img/logo.svg";
import {connect} from "react-redux";
import {getCount, incrementCount} from "../../redux/actions/clickCounterActions";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {count: null};
        this.onClick = this.onClick.bind(this);
    }


    componentDidMount() {
        this.props.getCount();
    }

    onClick() {
        this.props.incrementCount();
    }

    render() {
        const user = this.props.auth.user;
        const {loading, count} = this.props.clickCounter;
        const {error} = this.props.errors;
        let content;
        if (error) {
            content = (<p>Error: {error}</p>);
        } else if (loading) {
            content = (<p>Loading Clicks. . .</p>);
        } else {
            content = (
                <div>
                    <p> Clicker Count: {count} </p>
                    <button onClick={this.onClick} className="mt-2 btn btn-info">
                        Click Me!
                    </button>
                </div>
            );
        }
        return (
            <div className="Dashboard">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Hello {user.name}
                    </p>
                    <div className="container">
                        {content}
                    </div>
                </header>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    clickCounter: state.clickCounter
});

export default connect(
    mapStateToProps,
    {getCount, incrementCount}
)(Dashboard);

