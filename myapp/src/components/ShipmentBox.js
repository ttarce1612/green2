import React from 'react';
// import './css/Pagination.css';

class ShipmentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data || [],
            cols: '',
            icon: '',
        }
        this.statusHandle();
    }
    statusChecker() {
        let cols2 = "";
        let icon2 = "";
        switch (this.state.data.Status) {
            case "In process":
                cols2 = "blue-color";
                icon2 = "fa fa-check ";
                break;
            case "Complete":
                cols2 = "green-color";
                icon2 = "fa fa-check";
                break;
            case "ERROR":
                cols2 = "red-color";
                icon2 = "fa fa-exclamation-circle";
                break;
        }
        this.state.cols = cols2;
        this.state.icon = icon2;
        // this.setState({ cols: cols2, icon: icon2 });
    }


    render() {
        return (
            <div className={"shipment-box " + this.state.cols} >
                <div className="shipment-status" >
                    <span>&nbsp;</span>
                    <span className = 'right'>{this.state.data.Status}</span>
                </div>
                <div className = "shipment-icon-id">
                    <span>{this.state.icon} </span>
                    <span className = 'right'>{this.state.data.Transactionid}</span>
                </div>
                <div className = 'shipent-shipcode'>
                    <span>&nbsp;</span>
                    <span className = 'right'>{this.state.data.Shipcode}</span>
                </div>
            </div>
        )
    }
} export default ShipmentBox;