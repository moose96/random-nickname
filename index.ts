import { RandomNicknameOptions, RandomNickname, Pattern, RandomResultElement } from './src/types';
import { resolvePattern, randomizeFromPatternElement, filterResultObjects } from './src/lib';

const defaultOptions: RandomNicknameOptions = {
  pattern: Pattern.Long,
  separators: ['', '_', '-', '.'],
  minNumber: 1,
  maxNumber: 999,
  duplicateLetters: true,
  changeCase: true,
};

export default function randomNickname(options: RandomNicknameOptions): RandomNickname {
  const _options = { ...defaultOptions, ...options };
  const {
    pattern,
    separators,
    wordMaxLength,
    minNumber,
    maxNumber,
    duplicateLetters,
    changeCase,
  } = _options;

  const resultString = pattern;
  const resultObjects = resolvePattern(pattern).map<RandomResultElement>(patternElement =>
    randomizeFromPatternElement(patternElement, { separators, wordMaxLength, minNumber, maxNumber })
  );

  resultObjects.forEach(object => {
    const { type, value } = object;

    // eslint-disable-next-line no-useless-escape
    resultString.replace(`\$\{${type}\}`, value.toString());
  });

  return {
    nickname: resultString,
    words: filterResultObjects(resultObjects, 'word'),
    separators: filterResultObjects(resultObjects, 'separator'),
    numbers: filterResultObjects(resultObjects, 'number').map(value => parseInt(value)),
  };
}
