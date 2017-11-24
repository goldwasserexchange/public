import notFirstOrFirstAndSecond from '../src/notFirstOrFirstAndSecond';

test('notFirstOrFirstAndSecond with first false and second false', () => {
  const first = false;
  const second = false;
  const expected = true;
  expect(notFirstOrFirstAndSecond(first, second)).toEqual(expected);
});

test('notFirstOrFirstAndSecond with first false and second true', () => {
  const first = false;
  const second = true;
  const expected = true;
  expect(notFirstOrFirstAndSecond(first, second)).toEqual(expected);
});

test('notFirstOrFirstAndSecond with first true and second false', () => {
  const first = true;
  const second = false;
  const expected = false;
  expect(notFirstOrFirstAndSecond(first, second)).toEqual(expected);
});

test('notFirstOrFirstAndSecond with first true and second true', () => {
  const first = true;
  const second = true;
  const expected = true;
  expect(notFirstOrFirstAndSecond(first, second)).toEqual(expected);
});
