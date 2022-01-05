import React from 'react';
import { render } from '@testing-library/react';
import { EntryProvider } from '../../context/EntryContext';
import { UserProvider } from '../../context/UserContext';
import Home from './Home';

it('should render the Home component', () => {
  const { container } = render(
    <EntryProvider>
      <UserProvider>
        <Home />
      </UserProvider>
    </EntryProvider>
  );

  expect(container).toMatchSnapshot();
});
