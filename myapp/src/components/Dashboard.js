import React from 'react';
import ShipmentBox from './ShipmentBox'

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state= {

        }
    }

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

    render(){
        return (
            <div>
                {this.buildShipmentBox()}
            </div>
        )
    }
} export default Dashboard;