import ADJECTIVES from '../../../data/adjectives.json';
import NOUNS from '../../../data/nouns.json';

import { WordType } from '../../../types';

type _MapType = {
  [key in WordType]: string[];
};

const _map: _MapType = {
  adjective: ADJECTIVES,
  noun: NOUNS,
};

export default function randomizeWord(wordType: WordType, maxLength?: number): string {
  const words = maxLength
    ? _map[wordType].filter(word => word.length <= maxLength)
    : _map[wordType];
  const word = words[Math.floor(Math.random() * words.length)];

  if (word) {
    return word;
  } else {
    throw Error('[randomizeWord]: word is undefined');
  }
}
