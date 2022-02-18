/**
 * Binary Search Tree is about insert and find a node in a binary tree
 * To insert we should folloew the rule, right is bigger than root and left is less then root
 * @method insert to add a node at the end
 * @method find to find a node
 */
 class Node {
  constructor(val){
      this.val = val;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
      this.root = null;
  }

  insert(val){
    let newNode = new Node(val);
    if(this.root === null){
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while(true){
      if(val === current.val) return null;
      if(val < current.val){
        if(current.left === null){
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
      if(current.right === null){
          current.right = newNode;
          return this;
      }
      current = current.right;
    }
  }

  find(val){
    if(this.root === null) return null;
    let current = this.root;
    let found = false;
    while(current && !found){
      if(val < current.val){
        current = current.left;
      } else if(val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
   
    return found ? current : null;
  }
  
}

let bsf = new BinarySearchTree()
bsf.insert(30)
bsf.insert(10)
bsf.insert(35)
bsf.insert(8)
bsf.insert(3)
bsf.insert(40)
bsf.insert(37)
bsf.find(37)