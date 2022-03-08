Array.prototype.mMap = function(fnc, thisObj) {
    let result = [];

     if(!this || typeof fnc !== 'function') throw new Error("Invalid args");

      this.forEach((item, idx) => {
        result[idx] = fnc.call(thisObj, item, idx, this);
      })

  return result;
}

const arrB = new Array(5)
arrB[0] = 1
arrB[2] = undefined
arrB[4] = null

let arr = [1,undefined,3,4];
console.log(arrB.mMap((val) => val * 2));
console.log(arrB.map((val) => val * 2));