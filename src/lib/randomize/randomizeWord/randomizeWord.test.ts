import ADJECTIVES from '../../../data/adjectives.json';
import NOUNS from '../../../data/nouns.json';

import randomizeWord from './randomizeWord';

describe('test randomizeWord', () => {
  it('should randomly select word from adjectives', () => {
    const word = randomizeWord('adjective');
    expect(ADJECTIVES.includes(word)).toBeTruthy();
  });

  it('should randomly select word from nouns', () => {
    const word = randomizeWord('noun');
    expect(NOUNS.includes(word)).toBeTruthy();
  });
});
