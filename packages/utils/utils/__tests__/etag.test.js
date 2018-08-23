import etag from '../src/etag';

test('etag', () => {
  expect(etag('jonathangoldwasser')).toBe('"12-eKZizNx9UggRDWpzElayIzYY7IY"');
});

test('etag with zero length entity', () => {
  expect(etag('')).toBe('"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk"');
});
