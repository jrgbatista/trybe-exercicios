const sum = require('./sum');

describe('sum of two numbers', () => {
  it('verifies if 4 + 5 = 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  it('verifies if 0 + 0 = 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it('verifies if 4 plus string 5 results in an error', () => {
    expect(() => sum(4, '5')).toThrow();
  });
  it('verifies if the error message is "parameters must be numbers"', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
});