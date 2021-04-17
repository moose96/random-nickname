import { Pattern } from '../../types';

import resolvePattern from './resolvePattern';

describe('test resolvePattern', () => {
  it('should match params', () => {
    const test = '${test}';
    expect(test).toMatch(/\$\{([a-z]+)\}/g);
  });
  it('should resolve pattern correctly', () => {
    const patternElements = resolvePattern(Pattern.Long);
    console.log(patternElements);
    expect(patternElements).toEqual(['adjective', 'separator', 'noun', 'separator', 'number']);
  });
});
