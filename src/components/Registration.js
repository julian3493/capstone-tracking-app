import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleSubmit = (e) => {
    axios.post('http://localhost:3001/registrations', {
      user: {
        username: user.username,
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation,
      },
    },
    { withCredentials: true }).then((response) => {
      console.log('registration res', response);
    }).catch((err) => {
      console.log('resgistration error', err);
    });
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
      <form className="resgister" onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required />
        <input type="password" name="password_confirmation" placeholder="Password confirmation" value={user.password_confirmation} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
