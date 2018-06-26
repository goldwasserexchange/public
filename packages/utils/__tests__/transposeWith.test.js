import { prop } from 'ramda';
import transposeWith from '../src/transposeWith';

test('transposeWith', () => {
  const fn = prop('time');
  const objectList = [
    [{ data: 1, time: 0 }, { data: 5, time: 1 }, { data: 4, time: 2 }, { data: 3, time: 3 }],
    [{ data: 10, time: 0 }, { data: 50, time: 1 }, { data: 40, time: 2 }, { data: 30, time: 3 }],
    [{ data: 10, time: 1 }, { data: 8, time: 2 }, { data: 6, time: 3 }],
    [{ data: 3, time: 0 }, { data: 12, time: 2 }, { data: 9, time: 3 }],
  ];
  const expected = [
    [{ data: 1, time: 0 }, { data: 10, time: 0 }, { data: 3, time: 0 }],
    [{ data: 5, time: 1 }, { data: 50, time: 1 }, { data: 10, time: 1 }],
    [{ data: 4, time: 2 }, { data: 40, time: 2 }, { data: 8, time: 2 }, { data: 12, time: 2 }],
    [{ data: 3, time: 3 }, { data: 30, time: 3 }, { data: 6, time: 3 }, { data: 9, time: 3 }],
  ];
  expect(transposeWith(fn, objectList)).toEqual(expected);
});
