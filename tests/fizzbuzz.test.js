const fb = require('../src/fizzbuzz');

describe('FIZZBUZZ CONSTANTS', () => {
  test('FIZZ is \'fizz\'', () => {
    expect(fb.FIZZ).toBe('fizz');
  });

  test('BUZZ is \'buzz\'', () => {
    expect(fb.BUZZ).toBe('buzz');
  });

  test('FIZZBUZZ is \'fizzbuzz\'', () => {
    expect(fb.FIZZBUZZ).toBe('fizzbuzz');
  });
});

describe('FIZZBUZZ METHODS', () => {
  test('Test isFizzy', () => {
    expect(fb.isFizzy(1)).toBe(false);
    expect(fb.isFizzy(3)).toBe(true);
    expect(fb.isFizzy(5)).toBe(false);
    expect(fb.isFizzy(6)).toBe(true);
    expect(fb.isFizzy(10)).toBe(false);
    expect(fb.isFizzy(15)).toBe(true);
    expect(fb.isFizzy(30)).toBe(true);
  });

  test('Test isBuzzy', () => {
    expect(fb.isBuzzy(1)).toBe(false);
    expect(fb.isBuzzy(3)).toBe(false);
    expect(fb.isBuzzy(5)).toBe(true);
    expect(fb.isBuzzy(6)).toBe(false);
    expect(fb.isBuzzy(10)).toBe(true);
    expect(fb.isBuzzy(15)).toBe(true);
    expect(fb.isBuzzy(30)).toBe(true);
  });

  test('Test fizzyBizzy', () => {
    expect(fb.fizzyBuzzy(1)).toBe('');
    expect(fb.fizzyBuzzy(3)).toBe('fizz');
    expect(fb.fizzyBuzzy(5)).toBe('buzz');
    expect(fb.fizzyBuzzy(6)).toBe('fizz');
    expect(fb.fizzyBuzzy(10)).toBe('buzz');
    expect(fb.fizzyBuzzy(15)).toBe('fizzbuzz');
    expect(fb.fizzyBuzzy(30)).toBe('fizzbuzz');
  });

  test('Test fizzBuzz', () => {
    expect(fb.fizzBuzz(1)).toEqual({
      count: 1, fizz: 0, buzz: 0, fizzBuzz: 0,
    });
    expect(fb.fizzBuzz(3)).toEqual({
      count: 3, fizz: 1, buzz: 0, fizzBuzz: 0,
    });
    expect(fb.fizzBuzz(5)).toEqual({
      count: 5, fizz: 1, buzz: 1, fizzBuzz: 0,
    });
    expect(fb.fizzBuzz(6)).toEqual({
      count: 6, fizz: 2, buzz: 1, fizzBuzz: 0,
    });
    expect(fb.fizzBuzz(10)).toEqual({
      count: 10, fizz: 3, buzz: 2, fizzBuzz: 0,
    });
    expect(fb.fizzBuzz(15)).toEqual({
      count: 15, fizz: 4, buzz: 2, fizzBuzz: 1,
    });
    expect(fb.fizzBuzz(30)).toEqual({
      count: 30, fizz: 8, buzz: 4, fizzBuzz: 2,
    });
  });
});
