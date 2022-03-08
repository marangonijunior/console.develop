function myExpect(input) {
  let not = false;
  
  return {
    toBe(data){
      const matched = not ? !Object.is(input, data) : Object.is(input, data);
      if(!matched){
        throw 'error';
      }
      return;
    },
    get not(){
      not = !not;
      return this;
    }
  }
}