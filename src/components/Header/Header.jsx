import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();

  return (
    <header>{user ? <p>Signing as {user}</p> : <p>Sign in, Please!</p>}</header>
  );
}
