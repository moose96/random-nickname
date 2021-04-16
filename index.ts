import { RandomNicknameOptions, RandomNickname } from './src/types';
import ADJECTIVES from './src/data/adjectives.json';
import NOUNS from './src/data/nouns.json';

export default function randomNickname({
  pattern,
  separators,
  wordMaxLength,
  minNumber,
  maxNumber,
  duplicateLetters,
  changeCase,
}: RandomNicknameOptions): RandomNickname {}
