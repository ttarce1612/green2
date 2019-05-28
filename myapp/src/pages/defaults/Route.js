
import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

function DefaultContent({ routes }) {
    return (
        <div>
            <Header />
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </div>
    );
}

function HomeContent({ routes }) {
    return (
        <div>
            <Header />
            <HomePage />
        </div>
    );
}

function RouteWithSubRoutes(route) {
    return (
        <Route
        exact
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

const RouteList = [
    {
        path: "/app",
        component: DefaultContent,
        exact: true,
        routes: [
            {
                path: "app/home",
                component: HomePage
            }
        ]
    }, 
    {
        path: "/login",
        component: LoginPage,
        routes: [],
        exact: true
    }, 
    {
        path: "/",
        component: HomeContent,
        routes: [],
        exact: true
    }
];

const Router = RouteList.map((route, i) => (
    <RouteWithSubRoutes key={i} {...route} />
));

export {
    Router
}