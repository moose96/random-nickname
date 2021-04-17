import ADJECTIVES from '../../../data/adjectives.json';
import NOUNS from '../../../data/nouns.json';

import {
  RandomResultElementWord,
  RandomResultElementString,
  RandomResultElementNumber,
} from '../../../types';

import randomizeFromPatternElement from './randomizeFromPatternElement';

describe('test randomizeFromPatternElement', () => {
  const options = {
    separators: ['_', '-'],
    minNumber: 0,
    maxNumber: 0,
  };

  it('should select randomly words as object', () => {
    const resultAdj = randomizeFromPatternElement('adjective', options) as RandomResultElementWord;

    expect(resultAdj.type).toBe('word');
    expect(resultAdj.wordType).toBe('adjective');
    expect(ADJECTIVES.includes(resultAdj.value)).toBeTruthy();

    const resultNoun = randomizeFromPatternElement('noun', {
      ...options,
      wordMaxLength: 6,
    }) as RandomResultElementWord;

    expect(resultNoun.type).toBe('word');
    expect(resultNoun.wordType).toBe('noun');
    expect(NOUNS.includes(resultNoun.value)).toBeTruthy();
    expect(resultNoun.value.length).toBeLessThanOrEqual(6);
  });

  it('should select randomly separators as object', () => {
    const { type, value } = randomizeFromPatternElement(
      'separator',
      options
    ) as RandomResultElementString;

    expect(type).toBe('separator');
    expect(options.separators.includes(value)).toBeTruthy();
  });

  it('should select randomly numbers as object', () => {
    const { type, value } = randomizeFromPatternElement(
      'number',
      options
    ) as RandomResultElementNumber;

    expect(type).toBe('number');
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThan(999);
  });
});
