



const curry = (fn) => {
  return curried = (...args) => {
    if(fn.length !== args.length){
        return curried.bind(null, ...args);
    } else if(fn.length < args.length){
        return fn(...args.slice(0,fn.length))
    }
    return fn(...args);
  } 
}