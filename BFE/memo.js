function memo(fnc, resolver) {
  const cache = new Map();
  
  return function(...args){
    const key = resolver ? resolver(...args) : args.join('_');
    if(cache.has(key)){
      return cache.get(key);
    }
    const value = fnc.apply(this, args);
    cache.set(key,value);

    return value;
  }
}