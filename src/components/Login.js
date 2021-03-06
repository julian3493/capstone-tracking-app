import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login, setLoggedUser } from '../redux/actions/actions';
import TopBar from './TopBar';
import '../styles/Login.css';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const fetchData = async () => {
    await axios.post('https://julian-comsumption-tracker-api.herokuapp.com/sessions', {
      user: {
        email: user.email,
        password: user.password,
      },
    },
    { withCredentials: true }).then((response) => {
      if (response.data.status === 'created') {
        dispatch(login({
          status: 'created',
          logged_in: true,
          user: response.data.user,
        }));
        dispatch(setLoggedUser(response.data.user));
        history.push('/dashboard');
      }
    }).catch((err) => {
      throw (err);
    });
  };

  const handleSubmit = (e) => {
    fetchData();
    e.preventDefault();
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
  };

  const handleBack = (e) => {
    history.push('/');
    e.preventDefault();
  };

  return (
    <div className="login-div">
      {TopBar({ title: 'Login' })}
      <form className="login" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>

      <button className="backBtn" type="button" onClick={handleBack}>Back</button>
    </div>
  );
};

export default Login;
