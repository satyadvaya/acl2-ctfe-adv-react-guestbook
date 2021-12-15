import React from 'react';
import reactDom from 'react-dom';
import App from './App';
import { UserProvider } from './context/UserContext';

reactDom.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
