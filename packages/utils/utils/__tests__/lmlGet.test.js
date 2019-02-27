import lmlGet from '../src/lmlGet';

describe('lmlGet', () => {
  it('should get the description with the correct id', () => {
    const lmlDescription = '0=default\n1=Nl\n2=English\n';
    expect(lmlGet(0)(lmlDescription)).toBe('default');
    expect(lmlGet(1)(lmlDescription)).toBe('Nl');
    expect(lmlGet(2)(lmlDescription)).toBe('English');
  });

  it('should get the description with the correct id, regardless of its position in the string', () => {
    const lmlDescription = '1=Nl\n0=default\n2=English\n';
    expect(lmlGet(0)(lmlDescription)).toBe('default');
    expect(lmlGet(1)(lmlDescription)).toBe('Nl');
    expect(lmlGet(2)(lmlDescription)).toBe('English');
  });

  it('should get the correct description with id defaulting to 0 when id is not in the string', () => {
    const lmlDescription = '0=default\n2=English\n';
    expect(lmlGet(3)(lmlDescription)).toBe('default');
    expect(lmlGet(1)(lmlDescription)).toBe('default');
  });

  it('should get the description with the correct id when the string does not contain consecutive ids', () => {
    const lmlDescription = '0=default\n2=English\n';
    expect(lmlGet(2)(lmlDescription)).toBe('English');
  });

  it('should get the correct description with either \\r or \\n as separator', () => {
    const lmlDescriptionWithNewLine = '0=default\n1=Nl\n2=English\n';
    const lmlDescriptionWithCarret = '0=default\r1=Nl\r2=English\r';
    expect(lmlGet(1)(lmlDescriptionWithNewLine)).toBe('Nl');
    expect(lmlGet(2)(lmlDescriptionWithCarret)).toBe('English');
  });

  it('should return the description when it does not contain any id', () => {
    const lmlDescription = 'default';
    expect(lmlGet(0)(lmlDescription)).toBe('default');
  });

  it('should return the description with the correct id when separator is repeated', () => {
    const lmlDescription = '0=default\n\n1=Nl\n\n2=English\n\n';
    expect(lmlGet(0)(lmlDescription)).toBe('default');
    expect(lmlGet(1)(lmlDescription)).toBe('Nl');
    expect(lmlGet(2)(lmlDescription)).toBe('English');
  });

  it('should return the description with the correct id when the string contains both \\r and \\n', () => {
    const lmlDescriptionWithNewLine = '0=default\r1=Nl\n2=English\r';
    expect(lmlGet(0)(lmlDescriptionWithNewLine)).toBe('default');
    expect(lmlGet(1)(lmlDescriptionWithNewLine)).toBe('Nl');
    expect(lmlGet(2)(lmlDescriptionWithNewLine)).toBe('English');
  });

  it('should be curried', () => {
    expect(lmlGet(0)).toBeInstanceOf(Function);
  });
});
