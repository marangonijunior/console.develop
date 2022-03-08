class Emitter {
  constructor() {
      this.queue = [];
  }

  subscribe(event, fn){
      if (this.queue[event]) {
          this.queue[event].push(fn);
      } else {
          this.queue[event] = [fn];
      }
      return {
          release: () => {
              const fncs = this.queue[event];
              const idx = fncs.indexOf(fn);
              if(idx > -1){
                  fncs.splice(idx, 1);
              }
          }
      }
  }

  emit(event, ...args){
      this.queue[event].forEach(item => {
          item.apply(null, args)
      })
  }
}

const square = (num) => {
  console.log(`Or number squared ${num * 2}`)
}

const sum = (num_a, num_b) => {
  console.log(`Or sum ${num_a + num_b}`)
}

let myEmitter = new Emitter();

const letSquare = myEmitter.subscribe('square', square);
const letSum = myEmitter.subscribe('sum', sum);

myEmitter.emit('square', 2);
myEmitter.emit('sum', 2, 3);

letSquare.release();
letSum.release();
