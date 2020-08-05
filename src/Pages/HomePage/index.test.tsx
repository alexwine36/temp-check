import React from 'react';
import { render } from "@testing-library/react";
import HomePage from '.';

describe('<HomePage />', () => {
  test('Renders without exploding', () => {
    render(
      <HomePage/>
    );
  });
});
