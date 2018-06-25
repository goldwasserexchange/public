import { lensProp } from 'ramda';

import lensIsEmpty from '../src/lensIsEmpty';

test('lensIsEmpty with not empty array', () => {
  const a = { test: [5, 4, 1, 2, 3] };
  const testLens = lensProp('test');
  const expected = false;
  expect(lensIsEmpty(testLens)(a)).toBe(expected);
});

test('lensIsEmpty with empty array', () => {
  const a = { test: [] };
  const testLens = lensProp('test');
  const expected = true;
  expect(lensIsEmpty(testLens)(a)).toBe(expected);
});
