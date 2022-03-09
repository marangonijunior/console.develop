function expect(input) {
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
};

function it(input_str, func){
  try{
    func();
    console.log("Success:",input_str)
  }catch(err){
    console.log("Failure:",input_str)
  }
};
