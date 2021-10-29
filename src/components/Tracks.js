import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Logout from './Logout';
import Navigation from './Navigation';
import { userTracks } from '../redux/actions/actions';
import Track from './Track';

const Tracks = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    await axios.get('http://localhost:3001/tracks',
      { withCredentials: true }).then((response) => {
      if (response.data.registers) {
        const tracks = response.data.registers;
        dispatch(userTracks(tracks));
      }
    }).catch((err) => {
      console.log('resgistration error', err);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Tracks</h1>
      <Track />
      <Navigation />
      <Logout />
    </div>
  );
};

export default Tracks;
