

Array.prototype.myMap = function(fnc, thisObject) {
  let result = [];

  if(typeof fnc !== 'function') return null;

  this.forEach((item, idx) => {
    result[idx] = fnc.call(thisObject, item, idx, this)
  })

  return result;
}

