import rejectNilOrEmpty from '../src/rejectNilOrEmpty';

test('rejectisNilOrEmpty', () => {
  const a = ['', [], {}, undefined, null, 0, 'test', { test: 'test' }, ['test', 'test'], { length: 0 }];
  const expected = [0, 'test', { test: 'test' }, ['test', 'test'], { length: 0 }];
  expect(rejectNilOrEmpty(a)).toEqual(expected);
});
