function firstBadVersion(isBad) {
  let badVersion = 0;
    
  return (version) => {
    if(!isBad(version)){
      return -1;
    }
      
    while(!isBad(badVersion)){
      badVersion++;
    }
      
    return badVersion
  }
}
