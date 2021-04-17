import randomizeNumber from './randomizeNumber';

describe('test randomizeNumber', () => {
  it('should select randomly number from given range', () => {
    const number = randomizeNumber({ minNumber: 0, maxNumber: 999 });
    expect(number).toBeGreaterThan(0);
    expect(number).toBeLessThan(999);
  });

  // it('should throw Error', () => {
  //   expect(randomizeNumber({ minNumber: 0, maxNumber: 1200 })).toThrowError(
  //     'Error: [randomizeNumber]: bounds out of range: min: 0, max: 1200'
  //   );
  // });
});
