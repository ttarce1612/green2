
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

const AdminRouter = require('./admin/Route').Router;
const defaultRouter = require('./defaults/Route').Router;

class AppContent extends React.Component {
    render() {
        return (
            <div className="app-content">
                <Router>
                {defaultRouter}
                   {AdminRouter}
                   
                </Router>
            </div>
        )
    }
}


export default AppContent;
