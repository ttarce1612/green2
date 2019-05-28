import React from 'react';
import Content from './../../components/Content';

class HomePage extends React.Component {
    render() {
        return (
            <div className="app-home-page">
                <Content data={[]} />
            </div>
        )
    }
}

export default HomePage;