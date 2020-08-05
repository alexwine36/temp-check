import React from 'react';
import { render } from "@testing-library/react";
import FamiliesQuery from '.';

describe('<FamiliesQuery />', () => {
  test('Renders without exploding', () => {
    render(
      <FamiliesQuery/>
    );
  });
});
