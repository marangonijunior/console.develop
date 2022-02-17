/**
 * Doubly Linked List 
 * @method push to add a node at the end
 * @method pop to remove a node at the end
 * @method shift to remove a node at the begin
 * @method unshift to add a node at the begin
 * @method get to get a node by index
 * @method set to replace a node by index
 * @method insert to inset a node by index
 * @method remove to remove a node by index
 */

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    let newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop(){
    if(!this.head) return null;
    let popNode = this.tail;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popNode.prev;
      this.tail.next = null;
      popNode.prev = null;
    }

    this.length--;
    return popNode;
  }

  shift(){
    if(this.length === 0) return null;
    let oldHead = this.head;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val){
    let newNode = new Node(val);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(idx){
    if(idx < 0 || idx > this.length) return null;
    let count = 0
    let current = this.head;

    while(count != idx){
      current = current.next;
      count++;
    }

    return current;
  }

  set(idx, val){
    let foundNode = this.get(idx);
    if(foundNode != null){
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(idx, val){
    if(idx < 0 || idx > this.length) return null;
    if(idx === 0) return this.unshift(val);
    if(idx === this.length) return this.push(val);

    let newNode = new Node(val);
    let beforeNode = this.get(idx -1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return newNode;
  }

  remove(idx){
    if(idx < 0 || idx >= this.length) return null;
    if(idx === 0) return this.shift();
    if(idx === this.length -1) return this.pop();

    let removeNode = this.get(idx);
    let beforeNode = removeNode.prev;
    let afterNode = removeNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removeNode.next = null;
    removeNode.prev = null;

    this.length--;
    return removeNode;
  }

}