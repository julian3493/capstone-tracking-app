import React from 'react';
import Login from './Login';
import TopBar from './TopBar';
// import Registration from './Registration';

const Home = () => (
  <div>
    {TopBar('App Tracker')}
    <Login />
  </div>
);

export default Home;
