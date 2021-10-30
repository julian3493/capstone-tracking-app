import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Logout from './Logout';
import Navigation from './Navigation';
import { userTracks } from '../redux/actions/actions';
import Tracks from './Tracks';
import TopBar from './TopBar';
import '../styles/TracksPage.css';

const TracksPage = () => {
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
    <div className="screen">
      {TopBar('Tracks')}
      <Tracks />
      <Logout />
      <Navigation />
    </div>
  );
};

export default TracksPage;
