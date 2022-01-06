// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { useUser } from '../../context/UserContext';

// export default function Login() {
//   const { user, setUser } = useUser();
//   const location = useLocation();
//   const { from } = location.state || { from: { pathname: '/' } };

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <p>Path to redirect to after logging in: {from.pathname}</p>
//       <p>Current User: {user}</p>
//       <button onClick={() => setUser('MrMagoo')}>Log in as MrMagoo</button>
//       <br />
//       <br />
//       <Link to="/">View Guestbook</Link>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  const { from } = location.state || { from: { pathname: '/' } };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginMatch = auth.login(username, password);

    if (loginMatch) {
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
          onChange={({ target }) => setUsername(target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          required
        />
        <button type="submit" aria-label="Sign In">
          Sign In
        </button>
      </form>
      {error && <p>{error}</p>}
    </fieldset>
  );
}
