/**
 * Merge Sort is about sort the array spliting the array and merging
 * @param {[number]} arr : Array received mixed containg numbers
 * @returns {[number]} Array in order
 */

function mergeSort(arr){
  if(arr.length <= 1) return arr;

  let mid = Math.floor(arr.length/2);
  let arr_left = mergeSort(arr.slice(0,mid));
  let arr_right = mergeSort(arr.slice(mid));

  return mergeArr(arr_left, arr_right)
}

function mergeArr(arr_a, arr_b){
  let temp_arr = [];
  let idx_a = 0;
  let idx_b = 0;

  while(idx_a < arr_a.length && idx_b < arr_b.length){
      if(arr_b[idx_b] > arr_a[idx_a]){
        temp_arr.push(arr_a[idx_a]);
        idx_a++;
      } else {
        temp_arr.push(arr_b[idx_b]);
        idx_b++;
      }
  }
  while(idx_a < arr_a.length){
    temp_arr.push(arr_a[idx_a]);
    idx_a++;
  }
  while(idx_b < arr_b.length){
    temp_arr.push(arr_b[idx_b]);
    idx_b++;
  }


  return temp_arr;
}

mergeSort([10,34,76,73])


