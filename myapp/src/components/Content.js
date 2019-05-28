import React from 'react';

import { Container, Row, Navbar, Nav, Form, FormControl, Button, Carousel } from 'react-bootstrap';
import './css/Pagination.css';
import SildeShow from './SildeShow';
import ShipmentBox from './ShipmentBox';


class Content extends React.Component {


    buildShipmentBox(){
        let data = [
            {
                Status:"Complete",
                Transactionid:"D56789",
                Shipcode: "786543"
            },
            {
                Status:"ERROR",
                Transactionid:"D56789",
                Shipcode: "786543"
            },
            {
                Status:"In process",
                Transactionid:"D56789",
                Shipcode: "786543"
            },
            {
                Status:"In process",
                Transactionid:"D56789",
                Shipcode: "786543"
            },
            {
                Status:"In process",
                Transactionid:"D56789",
                Shipcode: "786543"
            }
        ]
        for (let i in data){
            <div key = {i} className = "one-row-line">
                <   ShipmentBox data={data[i]} />              
            </div>
            
        }
    }
    render() {
        return (
            <div className="app-content">
                <Container>
                    {/* <Row>
                        {this.props.data}
                    </Row> */}
                    <Navbar
                        // bg="dark" 
                        // variant="dark" 
                        id="main-menu">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                        <Nav className="menu-left"style={{float:"right"}}>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Danh Sach San Pham</Nav.Link>
                            <Nav.Link href="#pricing">Lien He</Nav.Link>
                        </Nav>
                    </Navbar>
                   
                </Container>
                <div className ="sildeshow">
                {/* <SildeShow /> */}

                </div>
                <div>
                    {this.buildShipmentBox()}
                </div>
            </div>
        )
    }
}

export default Content;