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

  test('memoize allows second calling with different args', () => {
    const func = jest.fn();
    const memo = memoize(func);
    memo();
    memo('sdf');
    expect(func.mock.calls.length).toBe(2);
  });

  test('memoize returns cache of the last result', () => {
    const func = jest.fn();
    func.mockReturnValueOnce(10);
    const memo = memoize(func);
    const run1 = memo();
    const run2 = memo();
    expect(run1).toBe(10);
    expect(run2).toBe(10);
  });

  test('memoize caches the last result properly', () => {
    const func = jest.fn();
    func
      .mockReturnValueOnce(10)
      .mockReturnValueOnce(20);
    const memo = memoize(func);
    const run1 = memo('xyz');
    const run2 = memo('asdf');
    expect(run1).toBe(10);
    expect(run2).toBe(20);
  });


});
