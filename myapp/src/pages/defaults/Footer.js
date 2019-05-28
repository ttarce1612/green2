import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="app-footer">
                {this.props.data}
            </div>
        )
    }
}

export default Footer;