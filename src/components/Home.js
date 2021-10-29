import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from './TopBar';
import '../styles/Home.css';

const Home = () => (
  <div>
    {TopBar('App Tracker')}
    <div className="options">
      <button type="button"><Link to="/login">Login</Link></button>
      <button type="button"><Link to="/registration">Create Account</Link></button>
    </div>
  </div>
);

export default Home;
