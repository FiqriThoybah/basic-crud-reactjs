import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home'
// import Dashboard from './pages/Dashboard';
// import Profile from './pages/Profile';
import Add from './pages/user/Add'

export const routes = [
  {
    path: '/',
    component: Home,
    label: 'Home',
    exact: true,
  },
  {
    path: '/add',
    component: Add,
    label: 'Dashboard',
  },
  // {
  //   label: 'Profile',
  //   submenu: [
  //     {
  //       path: '/profile',
  //       component: Profile,
  //       label: 'My Profile',
  //     },
  //     {
  //       path: '/profile/settings',
  //       component: ProfileSettings,
  //       label: 'Profile Settings',
  //     },
  //   ],
  // },
];

export const renderRoutes = () => {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
  ));
};