import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import {getProfileFetch, logoutUser} from './redux/actions';
import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";
import Header from "./components/header";


export const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem('token') ? <Component {...props} /> : <Redirect to="/sign-in"/>
    )} />
)

class App extends Component {
  componentDidMount = () => {
    this.props.getProfileFetch()
  }

  render() {
    return (
          <div className="App">
            <Header/>

              <Router>
                <Switch>

                  <PrivateRoute exact
                         path='/'
                         component={Home} />
                  <Route exact path="/sign-in" component={Login} />
                  <Route path="/sign-up" component={Signup} />
                </Switch>
              </Router>

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

export default connect(mapStateToProps, mapDispatchToProps)(App);