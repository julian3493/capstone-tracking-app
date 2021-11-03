import React from 'react';
import { useSelector } from 'react-redux';
import Logout from './Logout';
import Navigation from './Navigation';
import TopBar from './TopBar';
import '../styles/More.css';

const More = () => {
  const user = useSelector((state) => state.logged_user);
  const { username } = user;

  return (
    <div className="screen">
      {TopBar({ title: 'More' })}
      <p className="more-content">
        Welcome
        &nbsp;
        {username}
      </p>
      <Logout />
      <Navigation />
    </div>
  );
};

export default More;
