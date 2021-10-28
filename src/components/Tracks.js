import React from 'react';
import axios from 'axios';
import Logout from './Logout';
import Navigation from './Navigation';

const Tracks = () => {
  const fetchData = async () => {
    await axios.get('http://localhost:3001/tracks',
      { withCredentials: true }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log('resgistration error', err);
    });
  };

  const handleCLick = (e) => {
    fetchData();
    e.preventDefault();
  };

  return (
    <div>
      <h1>Tracks</h1>
      <button type="button" onClick={handleCLick}>fetch</button>
      <Navigation />
      <Logout />
    </div>
  );
};

export default Tracks;
