import { lensProp } from 'ramda';

import lensLt from '../src/lensLt';

test('lensLt is lt', () => {
  const a = { test: 2 };
  const testLens = lensProp('test');
  const expected = true;
  expect(lensLt(testLens, 1)(a)).toBe(expected);
});

test('lensLt is not lt', () => {
  const a = { test: 0 };
  const testLens = lensProp('test');
  const expected = false;
  expect(lensLt(testLens, 1)(a)).toBe(expected);
});
