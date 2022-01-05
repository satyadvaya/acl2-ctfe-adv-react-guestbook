import React from 'react';
import { render } from '@testing-library/react';
import { EntryProvider } from '../../context/EntryContext';
import { UserProvider } from '../../context/UserContext';
import Layout from './Layout';

it('should render the Layout component', () => {
  const { container } = render(
    <EntryProvider>
      <UserProvider>
        <Layout />
      </UserProvider>
    </EntryProvider>
  );

  expect(container).toMatchSnapshot();
});
