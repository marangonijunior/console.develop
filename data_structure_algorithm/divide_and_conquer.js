/**
 * Divide and Conquer is about pick a number in the midle and look the if go the right or left
 * The array need to be sorted
 * @param {[number]} arr : Array sorted
 * @param {number} num : Number looked
 * @returns {number} return the index of the number
 */

 function divideAndConquer(arr, num){
  let min = 0;
  let max = arr.length - 1;

  while (min <= max){
    let mid = Math.floor((min + max) / 2);
    let currentElement = arr[mid];

    if(currentElement < num){
      min = mid + 1;
    }
    else if(currentElement > num){
      max = mid - 1;
    }
    else {
      return mid;
    }
  }

  return -1;
}

divideAndConquer([2,4,6,8,10,11,12,14,16,17,35,56,67,68,69,40], 67);