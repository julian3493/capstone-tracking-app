import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => (
  <div className="nav-div">
    <Link className="nav-link" to="/dashboard">Dashboard</Link>
    <Link className="nav-link" to="/tracks">Tracks</Link>
    <Link className="nav-link" to="/statistics">Statistics</Link>
    <Link className="nav-link" to="/more">More</Link>
  </div>
);

export default Navigation;
