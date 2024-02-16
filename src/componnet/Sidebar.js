import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { routes } from '../routes';

const Sidebar = () => {
  return (
    <Menu theme="dark" mode="inline">
      {routes.map((route, index) => (
        <Menu.Item key={index}>
          <Link to={route.path}>{route.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Sidebar;
