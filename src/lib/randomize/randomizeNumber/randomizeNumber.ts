type RandomizeNumberProps = {
  minNumber: number;
  maxNumber: number;
};

export default function randomizeNumber({ minNumber, maxNumber }: RandomizeNumberProps): number {
  if (minNumber < 0 || maxNumber > 999) {
    throw Error(`[randomizeNumber]: bounds out of range: min: ${minNumber}, max: ${maxNumber}`);
  }
  return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
}
