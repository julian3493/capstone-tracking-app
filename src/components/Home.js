import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from './TopBar';

const Home = () => (
  <div>
    {TopBar('App Tracker')}
    <div>
      <Link to="/login">Login</Link>
      <Link to="/registration">Create Account</Link>
    </div>
  </div>
);

export default Home;
