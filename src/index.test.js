const add = (a, b) => a + b;

const users = ['roman', 'fava', 'juzef', 'basia'];
it('Adds two values', () => {
  expect(users).toContain('roman');
  expect(users).not.toContain('apples');
});
