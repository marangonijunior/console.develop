/**
 * Bubble Sort is about sort the array, swaping between two pointers in the array
 * @param {[number]} arr Array mixed received contain numbers
 * @returns {[number]} Array in order
 */

function bubbleSort(arr) {

  const swap = (arr, idx) => {
    let temp = arr[idx];
    arr[idx] = arr[idx + 1];
    arr[idx + 1] = temp;
    return arr;
  }

  for(let i = arr.length; i > 0; i--){
    for(let ii = 0; ii < i - 1; ii++){

      if(arr[ii] > arr[ii + 1]){
        swap(arr, ii)
      }

    }
  }

  return arr;
}

bubbleSort([44,33,0,1,4,100,23])