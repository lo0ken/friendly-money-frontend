import React, { Component } from "react";
import {BrowserRouter as Router,} from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import {logoutUser, userPostFetch} from '../redux/actions';
import {connect} from "react-redux";



class Header extends Component {

    handleLogout = event => {
        event.preventDefault()
        localStorage.removeItem("token")
        this.props.logoutUser()
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">Firendly Money</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="/">Home</Nav.Link>
                                        {/*<Nav.Link href="/about-us">Contact Us</Nav.Link>
                                        <Nav.Link href="/contact-us">About Us</Nav.Link>
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>*/}
                                    </Nav>
                                    <Button onClick={this.handleLogout} href="/sign-in">Logout</Button>
                                </Navbar.Collapse>
                            </Navbar>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
})

export default connect(null, mapDispatchToProps)(Header);
