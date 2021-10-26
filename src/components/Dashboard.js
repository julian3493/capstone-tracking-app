import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Logout from './Logout';

const Dashboard = () => {
  const user = useSelector((state) => (state.logged_user));

  const fetchData = async () => {
    await axios.get('http://localhost:3001/tracks',
      { withCredentials: true }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log('resgistration error', err);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(user);
  return (
    <div>
      <h1>Dashboard</h1>
      <Logout />
    </div>
  );
};

export default Dashboard;
