import { memoize, areEqual, reactMemoize } from './index';

describe('memoize(fn, equality)', () => {


  test('memoize returns a function', () => {
    const memo = memoize();
    expect(memo).toBeInstanceOf(Function);
  });


});
