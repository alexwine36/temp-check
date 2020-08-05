import React from 'react';
import { render } from "@testing-library/react";
import InputFieldRenderer from '.';

describe('<InputFieldRenderer />', () => {
  test('Renders without exploding', () => {
    render(
      <InputFieldRenderer/>
    );
  });
});
