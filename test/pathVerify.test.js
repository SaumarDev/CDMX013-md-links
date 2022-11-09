const { pathVerify } = require('../lib/pathVerify.js');

describe('pathVerify', () => {
  it('pathVerify is a function', () => {
    expect(typeof pathVerify).toBe('function');
  });

  test('pathVerify resolve a relative path', () => {
    const relativePath = './testFile.md';
    expect(pathVerify(relativePath)).not.toBe(relativePath);
  });

  test('pathVerify resolve a relative path to absolute path', () => {
    const absolutePath =
      '/Users/marlene/Laboratoria/CDMX013-md-links/testFile.md';
    const relativePath = './testFile.md';
    expect(pathVerify(relativePath)).toBe(absolutePath);
  });

  test('pathVerify return an absolute path when an absolute path is passed as a parameter', () => {
    const absolutePath =
      '/Users/marlene/Laboratoria/CDMX013-md-links/testFile.md';
    expect(pathVerify(absolutePath)).toBe(absolutePath);
  });
});
