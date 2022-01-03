import React from 'react';
import Header from '../../components/Header/Header';

// const Layout = ({ children }) => {
// export default function Layout({ children }) {
function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
