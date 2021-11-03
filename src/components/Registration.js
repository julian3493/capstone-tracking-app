import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login, setLoggedUser } from '../redux/actions/actions';
import TopBar from './TopBar';
import '../styles/Registration.css';

const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const fetchData = async () => {
    await axios.post('https://julian-comsumption-tracker-api.herokuapp.com/registrations', {
      user: {
        username: user.username,
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation,
      },
    },
    { withCredentials: true }).then((response) => {
      if (response.data.status === 'created') {
        dispatch(login({
          status: 'created',
          loggued_in: true,
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
    <div className="register-div">
      {TopBar({ title: 'New Account' })}
      <form className="register" onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required />
        <input type="password" name="password_confirmation" placeholder="Password confirmation" value={user.password_confirmation} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>

      <button className="backBtn" type="button" onClick={handleBack}>Back</button>
    </div>
  );
};

export default Registration;
