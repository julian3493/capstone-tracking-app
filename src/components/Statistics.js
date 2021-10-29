import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { userTracks } from '../redux/actions/actions';
import Navigation from './Navigation';

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
      console.log('resgistration error', err);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>
        Pc laptop:
        {pcLaptop}
        Watts
      </p>
      <p>
        Tv:
        {tv}
        Watts
      </p>
      <p>
        Console:
        {videogamesConsole}
        Watts
      </p>
      <p>
        Blueray:
        {blueray}
        Watts
      </p>
      <p>
        Pc Desktop:
        {pcDesktop}
        Watts
      </p>
      <Navigation />
    </div>
  );
};

export default Statistics;
