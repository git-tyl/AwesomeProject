import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  test2();
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
