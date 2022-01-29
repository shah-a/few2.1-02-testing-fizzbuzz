const fb = require('../src/fizzbuzz');

test('Test isFizzy', () => {
  expect(fb.isFizzy(1)).toBe(false);
  expect(fb.isFizzy(3)).toBe(true);
  expect(fb.isFizzy(4)).toBe(false);
  expect(fb.isFizzy(6)).toBe(true);
});
