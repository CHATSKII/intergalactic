import React from 'react';
import { cleanup } from '@semcore/jest-preset-ui/testing';
import { shouldSupportClassName, shouldSupportRef } from '@semcore/jest-preset-ui/shared';
import InputMask from '../src';

describe('InputMask', () => {
  afterEach(cleanup);

  shouldSupportClassName(InputMask);
  shouldSupportRef(InputMask);
});

describe('InputMask.Value', () => {
  afterEach(cleanup);

  shouldSupportClassName(InputMask.Value, InputMask);
  shouldSupportRef(InputMask.Value, InputMask);
});
