import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Login() {
  const { user, setUser } = useUser();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  return (
    <div>
      <h2>Login Page</h2>
      <p>Path to redirect to after logging in: {from.pathname}</p>
      <p>Current User: {user}</p>
      <button onClick={() => setUser('MrMagoo')}>Log in as MrMagoo</button>
      <br />
      <br />
      <Link to="/">View Guestbook</Link>
    </div>
  );
}
