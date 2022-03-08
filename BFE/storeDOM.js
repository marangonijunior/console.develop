class NodeStore {
  key = '__keyStoreNode__';
  nodes = {};

   /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    node[this.key] = Symbol();
    this.nodes[node[this.key]] = value;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    return this.nodes[node[this.key]];
  }
  
  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return !!this.nodes[node[this.key]];
  }
}