export const memoize = (fn, equality) => {

  let lastArgs;
  let lastResult;

  return function() {
    const args = [...arguments];
    const argString = args.join('--');
    if(lastArgs == argString) return lastResult;

    lastArgs = argString;
    const result = fn.apply(null, args);
    return result;
  };
};

export const areEqual = (itemA, itemB) => {

};

export const reactMemoize = (Component) => {

};
