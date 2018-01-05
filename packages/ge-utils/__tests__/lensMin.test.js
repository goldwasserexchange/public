import { lensProp } from 'ramda';

import lensMin from '../src/lensMin';

test('lensMin', () => {
  const a = { test: [5, 4, 1, 2, 3] };
  const testLens = lensProp('test');
  const expected = 1;
  expect(lensMin(testLens)(a)).toBe(expected);
});
