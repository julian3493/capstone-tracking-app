import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { logout } from '../redux/actions/actions';
import '../styles/Logout.css';

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const fetchData = async () => {
    await axios.delete('http://localhost:3001/logout',
      { withCredentials: true }).then((response) => {
      if (response.data.status && response.data.status === 200) {
        dispatch(logout());
        history.push('/');
      }
    }).catch((err) => {
      throw (err);
    });
  };

  const logoutClick = () => {
    fetchData();
  };

  return (
    <button className="logoutBtn" type="button" onClick={logoutClick}>Logout</button>
  );
};

export default Logout;
