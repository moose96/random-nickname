export enum Pattern {
  Short = '(noun)(separator)(number)',
  Long = '(adjective)(separator)(noun)(separator)(number)',
}

export type RandomNicknameOptions = {
  pattern?: Pattern | string;
  wordMaxLength?: number;
  separators?: string[];
  minNumber?: number;
  maxNumber?: number;
  changeCase?: boolean;
  duplicateLetters?: boolean;
};

export type RandomNickname = {
  words: string[];
  separators: string[];
  numbers: number[];
  nickname: string;
};

export type WordType = 'adjective' | 'noun';

interface IRandomResultElement {
  type: string;
  value: unknown;
}

export interface RandomResultElementString extends IRandomResultElement {
  type: 'word' | 'separator';
  value: string;
}

export interface RandomResultElementNumber extends IRandomResultElement {
  type: 'number';
  value: number;
}

export interface RandomResultElementWord extends RandomResultElementString {
  wordType: WordType;
}

export type RandomResultElement =
  | RandomResultElementString
  | RandomResultElementNumber
  | RandomResultElementWord;
