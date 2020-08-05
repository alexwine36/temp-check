import React from 'react';
import { render } from "@testing-library/react";
import RoutesPage from '.';

describe('<RoutesPage />', () => {
  test('Renders without exploding', () => {
    render(
      <RoutesPage/>
    );
  });
});
