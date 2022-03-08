function invert(node) {
  // your code here
  if(!node) return null; 
  
  [node.left, node.right] = 
  [node.right, node.left];

  if(node.left){
    invert(node.left);
  }

  if(node.right){
    invert(node.right);
  }

  return node;
}

