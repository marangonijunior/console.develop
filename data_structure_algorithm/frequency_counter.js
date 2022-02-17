/**
 * Frequency counter is about check the frequency that some value squared existe in bettwen two arrays
 * @param {[number]} arr_a : Array received mixed 
 * @param {[number]} arr_b : Array received mixed 
 * @returns {boolean} if the array contem the same value with the same frequency
 */

 function frequecyCounter(arr_a, arr_b){
  if(arr_a.length !== arr_b.length){
    return false;
  }

  let frequencyArr_a = {};
  let frequencyArr_b = {};

  for(let val of arr_a){
    frequencyArr_a[val] = (frequencyArr_a[val] || 0) +1;
  }
  for(let val of arr_b){
    frequencyArr_b[val] = (frequencyArr_b[val] || 0) +1;
  }
  for(let key in frequencyArr_a){
    if(!(key ** 2 in frequencyArr_b)){
      return false;
    }
    if(frequencyArr_b[key ** 2] !== frequencyArr_a[key]){
      return false;
    }
  }

  return true;
}

frequecyCounter([1,2,3,2], [9,1,4,4])