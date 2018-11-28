import { memoize, areEqual, reactMemoize } from './index';

describe('memoize(fn, equality)', () => {


  test('memoize returns a function', () => {
    const memo = memoize();
    expect(memo).toBeInstanceOf(Function);
  });

  test('memoize calls the function it is given', () => {
    const func = jest.fn();
    const memo = memoize(func);
    memo();
    expect(func.mock.calls.length).toBe(1);
  });

  test('memoize prevents second calling with same args', () => {
    const func = jest.fn();
    const memo = memoize(func);
    memo();
    memo();
    expect(func.mock.calls.length).toBe(1);
  });

  test('memoize allows second with different args', () => {



  });


});
