import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth, useForm } from '../../context/AuthContext';
import { useUser } from '../../context/UserContext';

export default function Login() {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  const { from } = location.state || { from: { pathname: '/' } };
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useUser();
  const { formState, handleFormChange } = useForm({
    username: '',
    password: '',
  });
  const { username, password } = formState;

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginMatch = auth.login(username, password);

    if (loginMatch) {
      setUser(formState.username);
      history.replace(from.pathname);
    } else {
      setError('Invalid username/password');
    }
  };

  return (
    <fieldset>
      <legend>Sign In</legend>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={handleFormChange}
          required
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleFormChange}
          required
        />
        <br />
        <button type="submit" aria-label="Sign In">
          Sign In
        </button>
      </form>
      {error && <p>{error}</p>}
    </fieldset>
  );
}
