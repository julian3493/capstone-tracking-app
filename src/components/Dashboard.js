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
    time_connected: '',
    watts: '',
    user_id: user.id,
  });

  const fetchData = async () => {
    await axios.post('https://julian-comsumption-tracker-api.herokuapp.com/tracks', track,
      { withCredentials: true }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log('resgistration error', err);
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
      {TopBar('Dashboard')}
      <form className="track-form" onSubmit={handleSubmit}>
        <p className="select-label">Select Type:&nbsp;&nbsp;</p>
        <select name="electrodomestic" onChange={handleChange}>
          {setOpt()}
        </select>
        <input type="date" name="day" onChange={handleChange} required />
        <input type="number" name="time_connected" placeholder="Time" onChange={handleChange} required />
        <input type="number" name="watts" placeholder="Watts" onChange={handleChange} required />
        <button type="submit">Create</button>
      </form>
      <Logout />
      <Navigation />
    </div>
  );
};

export default Dashboard;
