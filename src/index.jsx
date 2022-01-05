import React from 'react';
import reactDOM from 'react-dom';
import App from './App';
import { EntryProvider } from './context/EntryContext';
import { UserProvider } from './context/UserContext';

reactDOM.render(
  <React.StrictMode>
    <EntryProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </EntryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
