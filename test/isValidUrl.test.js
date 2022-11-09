const { isValidUrl } = require('../lib/isValidUrl.js');

it('isValidUrl is a function', () => {
  expect(typeof isValidUrl).toBe('function');
});

test('isValidUrl returns true if the parameter is a valid link', () => {
  const url = 'https://nodejs.org/docs/latest/api/process.html#processargv'
  expect(isValidUrl(url)).toBe(true);
});

test('isValidUrl returns false if the parameter is an invalid link', () => {
    const urlFake = 'hhtps: hola'
    expect(isValidUrl(urlFake)).toBe(false);
  });
