import { Pattern } from '../../types';

export default function resolvePattern(pattern: Pattern | string): RegExpMatchArray | null {
  return pattern.match(/\$\{([a-z]+])\}/g);
}
