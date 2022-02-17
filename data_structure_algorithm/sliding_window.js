/**
 * Sliding Window is about look range of elements to check something in this case to see the max sum of range number proposal
 * @param {[number]} arr : Array received mixed containg numbers
 * @param {number} num : Range to look the sum
 * @returns {number} return the max sum possible
 */

 function slidingWindow(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if(num > arr.length){
    return null;
  }

  for(let idx = 0; idx < num; idx++){
    maxSum += arr[idx]
  }

  tempSum = maxSum;

  for(let idx = num; idx < arr.length; idx++){
    tempSum = tempSum - arr[idx - num] + arr[idx];
    maxSum = Math.max(maxSum,tempSum);
  }

  return maxSum;
}

slidingWindow([2,6,9,2,1,8,5,6,3], 3)