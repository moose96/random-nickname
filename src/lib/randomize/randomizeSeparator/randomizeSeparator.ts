export default function randomizeSeparator(separators: string[]): string {
  const separator = separators[Math.floor(Math.random() * separators.length)];
  if (typeof separator === 'string') {
    return separator;
  } else {
    throw Error('[randomizeSeparator]: separator is undefined');
  }
}
