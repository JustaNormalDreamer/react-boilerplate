// import { describe, test, expect, it } from '@jest/globals';
import { render, fireEvent, waitFor, screen, cleanup } from '@testing-library/react';
import React from 'react';
import Home from '@/pages/index';

describe('Test', () => {
  it('Something', () => {
    expect(true).toBeTruthy();
  });
});

describe('App Renders', () => {
  afterEach(() => {
    cleanup();
  });

  it('The app should render a home page.', () => {
    render(<Home />);
    expect(screen.getAllByText('Hello World!'));
  });
});
