import { RandomResultElement } from '../../types';

import filterResultObjects from './filterResultObjects';

describe('test filterResultObjects', () => {
  const result: RandomResultElement[] = [
    {
      type: 'word',
      wordType: 'adjective',
      value: 'awesome',
    },
    {
      type: 'separator',
      value: '_',
    },
    {
      type: 'word',
      wordType: 'noun',
      value: 'lion',
    },
    {
      type: 'separator',
      value: '.',
    },
    {
      type: 'number',
      value: 534,
    },
  ];

  it('should filter words', () => {
    expect(filterResultObjects(result, 'word')).toEqual(['awesome', 'lion']);
  });
  it('should filter separators', () => {
    expect(filterResultObjects(result, 'separator')).toEqual(['_', '.']);
  });
  it('should filter numbers', () => {
    expect(filterResultObjects(result, 'number')).toEqual(['534']);
  });
});
