import React from 'react';
import { useAuth } from '../../context/AuthContext';
// import { useUser } from '../../context/UserContext';

export default function Header() {
  // const { user } = useUser();
  const { user, logout } = useAuth();

  return (
    // <header>{user ? <p>Signing as {user}</p> : <p>Sign in, Please!</p>}</header>
    <header>
      {user ? (
        <>
          <p>Signing as {user.username}</p>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Sign in, Please!</p>
      )}
    </header>
  );
}
