import tapP from '../src/tapP';

test('tapP', () => {
  const val = 10;
  const fn = (x) => Promise.resolve(x);
  return tapP(fn, val).then((data) => expect(data).toBe(val));
});
