function clearAllTimeout() {
  let id = setTimeout(null, 0);
    
  while(id >= 0){
    window.clearTimeout(id);
    id--;
  }
}