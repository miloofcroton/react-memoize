const isIterable = (value) => Symbol.iterator in Object(value);

export const memoize = (fn) => {
  let lastArgs, result;

  return function() {
    const args = { ...[...arguments] };
    if(lastArgs && areEqual(lastArgs, args)) return result;
    lastArgs = args;
    return result = fn.apply(null, args);
  };
};

// makes react test pass but breaks others:

// export const memoize = (fn) => {
//   let lastArgs, result;

//   return function() {
//     const argTest = [...arguments];
//     const args = (argTest !== Object(argTest)) ?
//       { ...[...arguments] } :
//       { ...[...arguments] }[0];

//     if(lastArgs && areEqual(lastArgs, args)) return result;
//     lastArgs = args;
//     return result = fn.apply(null, args);
//   };
// };

export const areEqual = (itemA, itemB) => {
  if(itemA !== Object(itemA)) return itemA === itemB ? true : false;

  const keysA = Object.keys(itemA);
  const keysB = Object.keys(itemB);
  if(keysA.length !== keysB.length) return false;

  return keysA.every(key => itemA[key] === itemB[key]);
};

export const selectorMemoize = (selectors) => {

  let lastArgs, result;


  return function() {
    const args = selectors
      .slice(0, -1)
      .map(selector => selector.apply(null));

    if(equality(lastArgs, args)) return result;


    const memoSelector = memoize(selectors.slice(-1)[0], defaultEquality);
    memoSelector(input);
  }


};
