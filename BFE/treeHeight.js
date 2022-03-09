
/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
function getHeight(tree) {
  let max = 0;

  if(!tree){
    return max;
  }     

  for(let item of tree.children){
    max = Math.max(max, getHeight(item));
  }


  return max + 1;
}
