/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver) {
  const cache = new Map();

  return function(...args){
    const key = resolver && typeof resolver === 'function' ? resolver(...args) : args.join('_');
    
    if(cache.has(key)){
      return cache.get(key);
    }

    const val = func.apply(this, args); 
    cache.set(key, val);

    return val;
  }
}
