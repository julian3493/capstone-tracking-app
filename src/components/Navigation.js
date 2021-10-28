import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/tracks">Tracks</Link>
  </div>
);

export default Navigation;
