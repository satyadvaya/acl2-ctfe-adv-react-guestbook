import React from 'react';
import { render } from '@testing-library/react';
import { EntryProvider } from '../../context/EntryContext';
import { UserProvider } from '../../context/UserContext';
import Layout from './Layout';
import { AuthProvider } from '../../context/AuthContext';

it('should render the Layout component', () => {
  const { container } = render(
    <AuthProvider>
      <EntryProvider>
        <UserProvider>
          <Layout />
        </UserProvider>
      </EntryProvider>
    </AuthProvider>
  );

  expect(container).toMatchSnapshot();
});
