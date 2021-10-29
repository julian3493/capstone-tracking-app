import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import TopBar from './TopBar';

const More = () => {
  const user = useSelector((state) => state.logged_user);
  const { username } = user;

  return (
    <div>
      {TopBar('More')}
      <p>
        Welcome
        {username}
      </p>
      <Navigation />
    </div>
  );
};

export default More;
