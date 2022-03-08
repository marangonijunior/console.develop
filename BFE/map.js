Array.prototype.myMap = function(fnc, thisObj) {
  let result = [];

  if(!this || typeof fnc !== 'function') throw new Error("Invalid args");

  this.forEach((item, idx) => {
    result[idx] = fnc.call(thisObj, item, idx, this);
  })

  return result;
}
