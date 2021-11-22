import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TopBar.css';

const TopBar = ({ title }) => (
  <div className="top">
    <p className="top-title">{title}</p>
  </div>
);

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TopBar;
