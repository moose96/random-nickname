enum Pattern {
  Short = '$noun$separator$number',
  Long = '$adjective$separator$noun$separator$number',
}

export type RandomNicknameOptions = {
  pattern: Pattern | string;
  wordMaxLength: number;
  separators: string[];
  minNumber: number;
  maxNumber: number;
  changeCase: boolean;
  duplicateLetters: boolean;
};

export type RandomNickname = {
  words: string[];
  separators: string[];
  number: number;
  nickname: string;
};
