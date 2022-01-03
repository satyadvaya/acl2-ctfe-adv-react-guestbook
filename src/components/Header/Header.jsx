import React from 'react';
import { useUser } from '../../context/UserContext';

// const Header = () => {
// export default function Header() {
function Header() {
  const { user } = useUser();

  return (
    <header>{user ? <p>Signing as {user}</p> : <p>Sign in, Please!</p>}</header>
  );
}

export default Header;
