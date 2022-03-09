// This is the class for the node
// you can use this directly as it is bundled with your code

// class Node {
//   value: number
//   left: null | Node
//   right: null | Node
//   constructor(val) {
//     this.value = val
//     this.left = null
//     this.right = null
//   }
// }

/**
 * @param {Node} root
 * @return {string}
 */
function serialize(root) {
  if(!root) return 'null';
  return `${root.value},${serialize(root.left)},${serialize(root.right)}`;
}

/**
 * @param {string} str
 * @return {Node}
 */
function deserialize(str) {
  let arrfromStr = str.split(',');
  return dfs(arrfromStr);

  function dfs(arr){
    if(!arr.length) return null;
    let item = arr.shift();

    if(item !== 'null'){
      let node = new Node(item.value);
      node.left = dfs(arrfromStr);
      node.right = dfs(arrfromStr);
      return node;
    }

    return null;
  }  
}
