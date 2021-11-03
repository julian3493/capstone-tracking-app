import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { userTracks } from '../redux/actions/actions';
import TopBar from './TopBar';
import Navigation from './Navigation';
import Logout from './Logout';
import '../styles/Statistics.css';

const Statistics = () => {
  const trackStored = useSelector((state) => state.tracks);
  let pcLaptop = 0;
  let tv = 0;
  let videogamesConsole = 0;
  let blueray = 0;
  let pcDesktop = 0;
  if (trackStored.payload && trackStored.payload.length > 0) {
    trackStored.payload.forEach((track) => {
      const time = track.time_connected / 60;
      const { watts, electrodomestic } = track;
      switch (electrodomestic) {
        case 'pc_laptop':
          pcLaptop += (time * watts);
          break;
        case 'tv':
          tv += (time * watts);
          break;
        case 'videogames_console':
          videogamesConsole += (time * watts);
          break;
        case 'blueray':
          blueray += (time * watts);
          break;
        case 'pc_desktop':
          pcDesktop += (time * watts);
          break;
        default:
          break;
      }
    });
  }

  const dispatch = useDispatch();

  const fetchData = async () => {
    await axios.get('http://localhost:3001/tracks',
      { withCredentials: true }).then((response) => {
      if (response.data.registers) {
        const tracks = response.data.registers;
        dispatch(userTracks(tracks));
      }
    }).catch((err) => {
      throw (err);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="screen">
      {TopBar({ title: 'Statistics' })}
      <div className="stats-body">
        <h3 className="stat-title">Total consumed</h3>
        <p className="p-stat">
          Pc laptop:
          &nbsp;
          {pcLaptop}
          Watts
        </p>
        <p className="p-stat">
          Tv:
          &nbsp;
          {tv}
          Watts
        </p>
        <p className="p-stat">
          Console:
          &nbsp;
          {videogamesConsole}
          Watts
        </p>
        <p className="p-stat">
          Blueray:
          &nbsp;
          {blueray}
          Watts
        </p>
        <p className="p-stat">
          Pc Desktop:
          &nbsp;
          {pcDesktop}
          Watts
        </p>
      </div>
      <Logout />
      <Navigation />
    </div>
  );
};

export default Statistics;
