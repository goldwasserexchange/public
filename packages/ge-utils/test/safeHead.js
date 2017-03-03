import test from 'ava';
import safeHead from '../src/safeHead';

test('safeHead with string', (t) => {
  const string = 'abcdef';
  t.is(safeHead(string), 'a');
});

test('safeHead with list', (t) => {
  const list = ['a', 'b', 'c', 'd', 'e', 'f'];
  t.is(safeHead(list), 'a');
});

test('safeHead with empty list', (t) => {
  const list = [];
  t.is(safeHead(list), undefined);
});

test('safeHead with neither string nor list', (t) => {
  t.is(safeHead(true), undefined);
});
