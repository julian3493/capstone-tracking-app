import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { logout } from '../redux/actions/actions';

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const fetchData = async () => {
    await axios.delete('http://localhost:3001/logout',
      { withCredentials: true }).then((response) => {
      console.log(response);
      if (response.data.status && response.data.status === 200) {
        dispatch(logout());
        history.push('/');
      }
    }).catch((err) => {
      console.log('resgistration error', err);
    });
  };

  const logoutClick = () => {
    fetchData();
    console.log('logout');
  };

  return (
    <div>
      <button type="button" onClick={logoutClick}>Logout</button>
    </div>
  );
};

export default Logout;
