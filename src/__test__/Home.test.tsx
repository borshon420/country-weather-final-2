import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

test('renders learn react link', () => {
  render(<Home />);
  const home = screen.getByTestId("home");
  expect(home).toBeInTheDocument();
});

test('renders learn react input', () => {
  render(<Home />);
  const input = screen.getByTestId("input");
  expect(input).toBeInTheDocument();
});

test('renders learn react button', () => {
  render(<Home />);
  const button = screen.getByTestId("button");
  expect(button).toBeInTheDocument();
});