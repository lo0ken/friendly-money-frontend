import React, { Component } from "react";
import {connect} from 'react-redux';
import {getProfileFetch, logoutUser} from '../redux/actions';


class Home extends Component {


    handleLogout = event => {
        event.preventDefault()
        localStorage.removeItem("token")
        this.props.logoutUser()
        this.props.history.push("/sign-in")
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h4>Username: {this.props.currentUser.username}</h4>
                <h4>User phone: {this.props.currentUser.phone}</h4>
                <h4>User email: {this.props.currentUser.email}</h4>
                <button onClick={this.handleLogout}>Log Out</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch()),
    logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);