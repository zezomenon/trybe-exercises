const sum = require('./ex-sum');

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});
