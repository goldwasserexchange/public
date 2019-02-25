import propIsNil from '../src/propIsNil';

const obj = {
  propNull: null,
  propUndefined: undefined,
  propOther: 'other',
};

describe('propIsNil', () => {
  it('should be true when prop is undefined', () => {
    expect(propIsNil('propNull', obj)).toBe(true);
  });

  it('should be true when prop is null', () => {
    expect(propIsNil('propUndefined', obj)).toBe(true);
  });

  it('should be false otherwise', () => {
    expect(propIsNil('propOther', obj)).toBe(false);
  });

  it('should be curried', () => {
    expect(propIsNil('propOther')(obj)).toBe(false);
  });
});
