import React from 'react';
import { render } from "@testing-library/react";
import AddFamilyPage from '.';

describe('<AddFamilyPage />', () => {
  test('Renders without exploding', () => {
    render(
      <AddFamilyPage/>
    );
  });
});
