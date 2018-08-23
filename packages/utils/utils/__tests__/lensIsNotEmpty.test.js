import { lensProp } from 'ramda';

import lensIsNotEmpty from '../src/lensIsNotEmpty';

test('lensIsNotEmpty with not empty array', () => {
  const a = { test: [5, 4, 1, 2, 3] };
  const testLens = lensProp('test');
  const expected = true;
  expect(lensIsNotEmpty(testLens)(a)).toBe(expected);
});

test('lensIsNotEmpty with empty array', () => {
  const a = { test: [] };
  const testLens = lensProp('test');
  const expected = false;
  expect(lensIsNotEmpty(testLens)(a)).toBe(expected);
});
