import { props, add } from 'ramda';
import combine from '../src/combine';

test('combine curry', () => {
  const dummyFn = () => '';
  expect(combine(dummyFn)).toBeInstanceOf(Function);
  expect(combine(dummyFn, dummyFn)).toBeInstanceOf(Function);
});

test('combine', () => {
  const list = [
    { isin: 'A', qty: 12, market: 'X' },
    { isin: 'B', qty: 5, market: 'X' },
    { isin: 'D', qty: 1, market: 'X' },
    { isin: 'A', qty: 8, market: 'Y' },
    { isin: 'B', qty: 2, market: 'X' },
  ];
  const combinedList = [
    { isin: 'A', qty: 12, market: 'X' },
    { isin: 'B', qty: 7, market: 'X' },
    { isin: 'D', qty: 1, market: 'X' },
    { isin: 'A', qty: 8, market: 'Y' },
  ];
  const isinMarket = props(['isin', 'market']);
  const sumQty = (k, l, r) => (k === 'qty' ? add(l, r) : r);
  expect(combine(isinMarket, sumQty, list)).toEqual(combinedList);
});
