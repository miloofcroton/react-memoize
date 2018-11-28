export const memoize = (fn, equality) => {

  let lastArgs;
  let lastResult;

  return function() {
    const args = [...arguments];
    const argString = args.join('--');
    if(lastArgs == argString) return lastResult;

    lastArgs = argString;
    let result;
    result = lastResult = fn.apply(null, args);
    return result;
  };
};

export const areEqual = (itemA, itemB) => {

};

export const reactMemoize = (Component) => {

};
