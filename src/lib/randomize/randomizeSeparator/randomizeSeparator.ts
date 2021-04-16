export default function randomizeSeparator(separators: string[]): string {
  const separator = separators[Math.floor(Math.random() * separators.length)];
  if (separator) {
    return separator;
  } else {
    throw Error('[randomizeSeparator]: separator is undefined');
  }
}
