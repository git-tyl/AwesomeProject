import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  test();
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
