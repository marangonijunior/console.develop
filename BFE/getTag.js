function getTags(tree) {
  const result = new Set();

  const dfs = (node) => {
    result.add(node.tagName.toLowerCase());
    const children = node.children;

    for(let i = 0; i < children.length; i++) {
      dfs(children[i]);
    }
  };

  dfs(tree);
  return [...result];
}