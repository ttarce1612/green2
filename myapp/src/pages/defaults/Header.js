import React from 'react';

import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap';

class Header extends React.Component {
    render(){
        return (
            <div className="app-header">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">
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
                        <Nav.Link to="/admin"></Nav.Link>
                        <Nav.Link href="/admin">Administration</Nav.Link>
                        
                        </Nav>
                        <Navbar.Text>
                            <Link to="/login">Login</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;