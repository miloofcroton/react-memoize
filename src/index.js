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

export const defaultEquality = (itemA, itemB) => {
  return itemA === itemB ? true : false;
};

export const reactPropsEquality = (itemA, itemB) => {
  const keysA = Object.keys(itemA);
  const keysB = Object.keys(itemB);
  if(keysA.length !== keysB.length) return false;
  return keysA.every(key => defaultEquality(itemA[key], itemB[key]));
};

export const reactMemoize = (Component) => {

};
