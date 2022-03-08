const BFS = (rootA, rootB, target) => {
  if(rootA === target) {
    return rootB;
  }

  const queueA = [rootA];
  const queueB = [rootB];

  while(queueA.length) {
    const currentElementA = queueA.shift();
    const currentElementB = queueB.shift();

    if (currentElementA === target) {
      return currentElementB;
    }

    queueA.push(...currentElementA.children);
    queueB.push(...currentElementB.children);    
  }
    
  return null;
}


const findCorrespondingNode = (rootA, rootB, target) => {
  if(rootA === target) {
    return rootB;
  }
  for (let i = 0; i < rootA.children.length; i++) {
    const foundNode = findCorrespondingNode(rootA.children[i], rootB.children[i], target);
    if(foundNode) return foundNode;
  }
}