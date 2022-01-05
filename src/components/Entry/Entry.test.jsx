import React from 'react';
import { render } from '@testing-library/react';
import Entry from './Entry';

it('should render the Entry component', () => {
  const { container } = render(
    <Entry entry={{ name: 'name', message: 'message' }} />
  );

  expect(container).toMatchSnapshot();
});
