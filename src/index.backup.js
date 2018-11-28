export const memoize = (fn, equality) => {
  let lastArgs, result;

  return function() {
    const args = [...arguments];
    const argString = args.join('--');
    if(equality(lastArgs, argString)) return result;
    lastArgs = argString;
    return result = fn.apply(null, args);
  };
};

export const defaultEquality = (itemA, itemB) => itemA === itemB ? true : false;
export const reactPropsEquality = (prevProps, newProps) => {
  const keysPrev = Object.keys(prevProps);
  const keysNew = Object.keys(newProps);
  if(keysPrev.length !== keysNew.length) return false;
  return keysPrev.every(key => prevProps[key] === newProps[key]);
};

export const areEqual = (itemA, itemB) => {
  if(itemA !== Object(itemA)) return itemA === itemB ? true : false;

  const keysA = Object.keys(itemA);
  const keysB = Object.keys(itemB);
  if(keysA.length !== keysB.length) return false;

  return keysA.every(key => itemA[key] === itemB[key]);
};



export const reactMemoize = (Component) => {
  let prevProps, render;

  return function(){
    const newProps = [...arguments][0];
    if(prevProps && reactPropsEquality(prevProps, newProps)) return render;
    prevProps = newProps;
    return render = Component.apply(null, newProps);
  };
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
