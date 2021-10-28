import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Logout from './Logout';
import Navigation from './Navigation';
import { userTracks } from '../redux/actions/actions';

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

  const showTracks = () => {
    const trackStored = useSelector((state) => state.tracks);
    if (trackStored && trackStored.payload.length > 0) {
      return trackStored.payload.map((track) => {
        const {
          day, electrodomestic, id, watts,
        } = track;
        const timeConnected = track.time_connected;
        return (
          <div key={id}>
            <p>
              Date:
              {day}
            </p>
            <p>
              Electrodomestic:
              {electrodomestic}
            </p>
            <p>
              Time Connected:
              {timeConnected}
            </p>
            <p>
              Watts:
              {watts}
            </p>
          </div>
        );
      });
    }
    return (
      <div>
        <p> </p>
      </div>
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Tracks</h1>
      {showTracks()}
      <Navigation />
      <Logout />
    </div>
  );
};

export default Tracks;
