import React from 'react';

import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render(){
        return (
            <div className="app-header">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="images/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                        My Shop
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        
                        <Nav.Link>
                            <Link to="/admin/dashboard">Dashboard</Link>
                        </Nav.Link>
                        <NavDropdown title="User Management" id="basic-nav-dropdown">
                            <NavDropdown.Item >
                                <Link to="/admin/users" >Users</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/admin/role">
                                <Link to="/admin/role" >Role</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        
                        <Navbar.Text>
                            <Link to="/logout">Logout</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;