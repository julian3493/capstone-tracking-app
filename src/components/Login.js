import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login, setLoggedUser } from '../redux/actions/actions';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const fetchData = async () => {
    await axios.post('http://localhost:3001/sessions', {
      user: {
        email: user.email,
        password: user.password,
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
      } else {
        console.log(response.data);
      }
    }).catch((err) => {
      console.log('resgistration error', err);
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

  return (
    <div className="form-div">
      <form className="login" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
