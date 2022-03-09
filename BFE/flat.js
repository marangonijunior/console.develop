
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  let result = [];
  let isDone = true;

  for(item of arr){
    if(!Array.isArray(item)){
      result.push(item);
    } else {
      isDone = false;
      result.push(...item);
    }
  }

  return depth === 0 || isDone ? arr : flat(result, depth - 1)
}

