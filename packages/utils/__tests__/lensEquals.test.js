import { lensProp } from 'ramda';

import lensEquals from '../src/lensEquals';

test('lensEquals should be true', () => {
  const o = { test: 5 };
  const i = 5;
  const testLens = lensProp('test');
  const expected = true;
  expect(lensEquals(testLens, i)(o)).toBe(expected);
});

test('lensEquals should be false', () => {
  const o = { test: 4 };
  const i = 5;
  const testLens = lensProp('test');
  const expected = false;
  expect(lensEquals(testLens, i)(o)).toBe(expected);
});
