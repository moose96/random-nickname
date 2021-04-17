import { Pattern } from '../../types';

export default function resolvePattern(pattern: Pattern | string): string[] {
  const matches = pattern.match(/\(([a-z]+)\)/g);

  if (matches !== null) {
    const words = matches.map(match => {
      const _matches = match.match(/[a-z]+/g);

      if (_matches !== null) {
        const _word = _matches[0];

        if (!_word) {
          throw Error(`[resolvePattern]: Error while parsing pattern: ${pattern}`);
        }

        return _word;
      } else {
        throw Error(`[resolvePattern]: Error while parsing pattern: ${pattern}`);
      }
    });

    return words;
  } else {
    throw Error(`[resolvePattern]: Error while parsing pattern: ${pattern}`);
  }
}
