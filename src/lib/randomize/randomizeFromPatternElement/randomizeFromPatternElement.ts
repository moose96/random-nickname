/* eslint-disable indent */
import { randomizeNumber, randomizeSeparator, randomizeWord } from '../';
import { RandomNicknameOptions, RandomResultElement } from '../../../types';

type RandomizeFromPatternOptions = {
  separators: Required<RandomNicknameOptions>['separators'];
  wordMaxLength?: RandomNicknameOptions['wordMaxLength'];
  minNumber: Required<RandomNicknameOptions>['minNumber'];
  maxNumber: Required<RandomNicknameOptions>['maxNumber'];
};

export default function randomizeFromPatternElement(
  patternElement: string,
  options: RandomizeFromPatternOptions
): RandomResultElement {
  const { separators, wordMaxLength, ...restOptions } = options;

  switch (patternElement) {
    case 'adjective':
    case 'noun':
      return {
        type: 'word',
        wordType: patternElement,
        value: randomizeWord(patternElement, wordMaxLength),
      };
    case 'separator':
      return {
        type: 'separator',
        value: randomizeSeparator(separators),
      };
    case 'number':
      return {
        type: 'number',
        value: randomizeNumber(restOptions),
      };
    default:
      throw Error(`[randomizeFromPatternElement] unknown pattern element: ${patternElement}`);
  }
}
