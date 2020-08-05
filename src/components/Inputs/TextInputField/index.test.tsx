import React from 'react';
import { render } from "@testing-library/react";
import TextInputField from '.';

describe('<TextInputField />', () => {
  test('Renders without exploding', () => {
    render(
      <TextInputField/>
    );
  });
});
