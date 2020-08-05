---
to: "<%= createTest ? basePath + '/' + type + '/' + h.inflection.camelize(name) + '/index.test.tsx' : null %>"
---
import React from 'react';
import { render } from "@testing-library/react";
import <%= h.inflection.camelize(name) %> from '.';

describe('<<%= h.inflection.camelize(name) %> />', () => {
  test('Renders without exploding', () => {
    render(
      <<%= h.inflection.camelize(name) %>/>
    );
  });
});
