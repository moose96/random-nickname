import randomNicknames from '..';

describe('test randomNickanmes', () => {
  it('should generate random nickname', () => {
    const { nickname } = randomNicknames();
    console.log(nickname);
  });
});
