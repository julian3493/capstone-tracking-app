import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Logout from './Logout';
import Navigation from './Navigation';
import TopBar from './TopBar';
import '../styles/Dashboard.css';

const devices = [
  'pc_laptop',
  'tv',
  'videogames_console',
  'blueray',
  'pc_desktop',
];

const setOpt = () => devices.map((device) => <option value={device} key={device}>{device}</option>);

const Dashboard = () => {
  const user = useSelector((state) => (state.logged_user));

  const [track, setTrack] = useState({
    electrodomestic: 'pc_laptop',
    day: '',
    time_connected: 0,
    watts: 0,
  });

  const fetchData = async () => {
    await axios.post('http://localhost:3001/tracks', {
      track: {
        electrodomestic: track.electrodomestic,
        day: track.day,
        time_connected: track.time_connected,
        watts: track.watts,
        user_id: user.id,
      },
    },
    { withCredentials: true }).then((response) => {
      console.log(response);
    }).catch((err) => {
      throw (err);
    });
  };

  const handleSubmit = (e) => {
    fetchData();
    e.preventDefault();
  };

  const handleChange = (e) => {
    setTrack({
      ...track,
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
  };

  return (
    <div className="screen">
      {TopBar({ title: 'Dashboard' })}
      <form className="track-form" onSubmit={handleSubmit}>
        <p className="select-label">Select Type:&nbsp;&nbsp;</p>
        <select name="electrodomestic" onChange={handleChange}>
          {setOpt()}
        </select>
        <input type="date" name="day" value={track.day} onChange={handleChange} required />
        <input type="number" name="time_connected" placeholder="Time" value={track.time_connected} onChange={handleChange} required />
        <input type="number" name="watts" placeholder="Watts" value={track.watts} onChange={handleChange} required />
        <button type="submit">Create</button>
      </form>
      <Logout />
      <Navigation />
    </div>
  );
};

export default Dashboard;
