function debounce(fnc, wait) {
  let timer = null;

  function callFnc(...args){
      if (timer !== null){
          clearTimeout(timer);
      }
      timer = setTimeout(() => {
          return fnc.apply(null, args);
      }, wait);
  }
  return callFnc;
};

function throttle(fnc, wait) {
  let isThrottle = false;

  function callFnc(...args){
      if (isThrottle){
          return;
      }
      isThrottle = true
      setTimeout(() => {
          isThrottle = false
      }, wait);
      return fnc.apply(null, args);
  }
  return callFnc;
};

function throttle_2(fnc, wait) {
let isTrottling = false;
let listArgs = [];

return function(...args){

  if(isTrottling){
    listArgs = args;
    return;
  }
  
  fnc.apply(this, args)
  isTrottling = true;

  setTimeout(()=>{
    
    if(listArgs.length){
        fnc.apply(this, listArgs);
        listArgs.length = 0;
    }

    isTrottling = false;
  }, wait)

}
}

// function print(str) {
//     console.log('printing:', str);
// };

// const testPrintDebounce = debounce(print, 300);
// const testPrintThrottle = throttle(print, 300);

// // testPrintDebounce(1)
// // testPrintDebounce(2)
// // testPrintDebounce(3)

// // setTimeout(() => {
// //     testPrintDebounce(4)
// //     testPrintDebounce(5)
// // }, 400);

// testPrintThrottle(1)
// testPrintThrottle(2)
// testPrintThrottle(3)

// setTimeout(() => {
//     testPrintThrottle(4)
//     testPrintThrottle(5)
// }, 400);