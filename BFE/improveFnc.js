function excludeItems(items, excludes) {
    const excludeMap = new Map();

    excludes.forEach(({k, v}) => {
      if(!excludeMap.has(k)){
        excludeMap.set(k, new Set());
      }
      excludeMap.get(k).add(v);
    });

    return items.filter(item =>{
        return Object.keys(item).every( 
            key => 
                !excludeMap.get(key) || !excludeMap.get(key).has(item[key])
        );
    });
}

function excludeItems(items, excludes) {
  return items.filter((item) =>
    excludes.every(({k, v}) => item[k] !== v)
  )
}
