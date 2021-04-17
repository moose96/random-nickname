import randomizeSeparator from './randomizeSeparator';

describe('test randomizeSeparator', () => {
  it('should select separator randomly from separators', () => {
    const separators = ['', '_', '-', '.'];
    const separator = randomizeSeparator(separators);

    expect(separators).toContain(separator);
  });
});
