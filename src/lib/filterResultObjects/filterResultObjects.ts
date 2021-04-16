import { RandomResultElement } from '../../types';

export default function filterResultObjects(
  resultObjects: RandomResultElement[],
  type: RandomResultElement['type']
): string[] {
  return resultObjects
    .filter(object => object.type === type)
    .map(object => object.value.toString());
}
