
import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import AdminUser from './usermanagement/Users';

function AdminContent({ routes }) {
    return (
      <div>
          <Header />
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    );
  }

function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }

const RouteList = [
    {
      path: "/admin",
      component: AdminContent,
      routes: [
        {
          path: "/admin/users",
          component: AdminUser
        }
      ]
    }
  ];

const Router = RouteList.map((route, i) => (
    <RouteWithSubRoutes key={i} {...route} />
))

export {
    Router
}