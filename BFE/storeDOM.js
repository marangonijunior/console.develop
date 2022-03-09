class NodeStore {

  key = '__key__';
  storageNodes = {};

   /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
   node[this.key] = new Date().getTime().toString(); // Symbol()
   this.storageNodes[node[this.key]] = value;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
   return this.storageNodes[node[this.key]];
  }
  
  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return !!this.storageNodes[node[this.key]]
  }
}
