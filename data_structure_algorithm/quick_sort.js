 /* Quick Sort is about sort the array selecting one element called pivot and fiding the next one that this pivot should be 
 * @param {[number]} arr : Array received mixed containg numbers
 * @returns {[number]} Array in order
 */


 function quickSort(arr, leftIdx = 0, rightIdx = arr.length -1) {
   if(leftIdx < rightIdx) {
    let pivotIdx = pivotHelp(arr,leftIdx, rightIdx);

    quickSort(arr,leftIdx,pivotIdx-1);
    quickSort(arr,pivotIdx+1,rightIdx); 
   }
   return arr;
 }

 function pivotHelp(arr, startIdx = 0, endIdx = arr.length - 1) {

  let pivot = arr[startIdx];
  let swapIdx = startIdx;

  const swap = (arr, idx_a, idx_b) => {
    let temp = arr[idx_a];
    arr[idx_a] = arr[idx_b];
    arr[idx_b] = temp;
    return arr;
  }

  for(let idx = startIdx + 1; idx <= endIdx; idx++){
    if(pivot > arr[idx]){
      swapIdx++;
      swap(arr, swapIdx, idx);
    }
  }

  swap(arr, startIdx, swapIdx);
  return swapIdx;

}

quickSort([4,7,2,1,5,8,6,0])