import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryInfo from '../components/CountryInfo';
import {createMemoryHistory} from 'history';
import { Router } from 'react-router-dom';


test('renders learn react link', () => {
    const history = createMemoryHistory();
    history.push('country')
  render(<Router history={history}>
      <CountryInfo />
  </Router>);
  const country = screen.getByTestId("country");
  expect(country).toBeInTheDocument();
});

test('renders learn react country-info', () => {
    const history = createMemoryHistory();
    history.push('country')
  render(<Router history={history}>
      <CountryInfo />
  </Router>);
  const country = screen.getByTestId("country-info");
  expect(country).toBeInTheDocument();
});

test('renders learn react country-button', () => {
    const history = createMemoryHistory();
    history.push('country')
  render(<Router history={history}>
      <CountryInfo />
  </Router>);
  const country = screen.getByTestId("country-button");
  expect(country).toBeInTheDocument();
});



