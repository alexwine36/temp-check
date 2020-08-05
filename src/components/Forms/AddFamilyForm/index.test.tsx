import React from 'react';
import { render } from "@testing-library/react";
import AddFamilyForm from '.';

describe('<AddFamilyForm />', () => {
  test('Renders without exploding', () => {
    render(
      <AddFamilyForm/>
    );
  });
});
