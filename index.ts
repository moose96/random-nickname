import {
  RandomNicknameOptions,
  RandomNickname,
  Pattern,
  RandomResultElement,
  RandomResultElementWord,
} from './src/types';
import { resolvePattern, randomizeFromPatternElement, filterResultObjects } from './src/lib';

type RandomNicknameOptionsEx = Required<Omit<RandomNicknameOptions, 'wordMaxLength'>> &
  Pick<RandomNicknameOptions, 'wordMaxLength'>;

const defaultOptions: RandomNicknameOptionsEx = {
  pattern: Pattern.Long,
  separators: ['', '_', '-', '.'],
  minNumber: 1,
  maxNumber: 999,
  duplicateLetters: true,
  changeCase: true,
};

export default function randomNickname(
  options: RandomNicknameOptions = defaultOptions
): RandomNickname {
  const _options: RandomNicknameOptionsEx = { ...defaultOptions, ...options };
  const {
    pattern,
    separators,
    wordMaxLength,
    minNumber,
    maxNumber,
    /*duplicateLetters,
    changeCase,*/
  } = _options;

  let resultString = pattern;
  const resultObjects = resolvePattern(pattern).map<RandomResultElement>(patternElement =>
    randomizeFromPatternElement(patternElement, { separators, wordMaxLength, minNumber, maxNumber })
  );

  resultObjects.forEach(object => {
    const { type, value } = object;
    let replaceString = '';

    if (type === 'word') {
      replaceString = `(${(object as RandomResultElementWord).wordType})`;
    } else {
      replaceString = `(${type})`;
    }

    // eslint-disable-next-line no-useless-escape
    resultString = resultString.replace(replaceString, value.toString());
  });

  return {
    nickname: resultString,
    words: filterResultObjects(resultObjects, 'word'),
    separators: filterResultObjects(resultObjects, 'separator'),
    numbers: filterResultObjects(resultObjects, 'number').map(value => parseInt(value)),
  };
}
