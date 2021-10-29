import React from 'react';
import '../styles/TopBar.css';

const TopBar = (title) => (
  <div className="top">
    <p className="top-title">{title}</p>
  </div>
);

export default TopBar;
