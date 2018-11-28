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

export const defaultEquality = (itemA, itemB) => {
  return itemA === itemB ? true : false;
};

export const reactPropsEquality = (prevProps, newProps) => {
  const keysPrev = Object.keys(prevProps);
  const keysNew = Object.keys(newProps);
  if(keysPrev.length !== keysNew.length) return false;
  return keysPrev.every(key => prevProps[key] === newProps[key]);
};

// export const reactMemoize = (Component) => {

//   let prevProps, render;

//   return function(){
//     const newProps = [...arguments];
//     if(reactPropsEquality(prevProps, newProps)) return render;

//     prevProps = newProps;

//     render = Component.apply(null, newProps);
//     return render;
//   };


// };
