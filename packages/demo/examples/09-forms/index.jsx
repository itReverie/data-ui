import React from 'react';

import {
  Button,
  Select,
  StepIncrementer,
} from '@data-ui/forms';

import readme from '../../node_modules/@data-ui/forms/README.md';

export default {
  usage: readme,
  examples: [
    {
      description: 'Stepper',
      components: [StepIncrementer],
      example: () => (
        <StepIncrementer />
      ),
    },
    {
      description: 'Select',
      components: [Select],
      example: () => (
        <Select
          autosize={true}
          options={[
            { value: 'Fedex', label: 'Fedex' },
            { value: 'UPS', label: 'UPS' },
            { value: 'DHL', label: 'DHL' },
            { value: 'LocalPost', label: 'LocalPost' },
          ]}
        />
      ),
    },
    {
      description: 'Button -- text',
      components: [Button],
      example: () => (
        <Button rounded>{'Add'}</Button>
      ),
    },
    {
      description: 'Button -- removed',
      components: [Button],
      example: () => (
        <Button rounded disabled>x</Button>
      ),
    },
  ],
};
