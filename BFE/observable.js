class Observable {
  
  constructor(setup) {
    this._setup = setup;
  }
 
  subscribe(subscriber) {
    const wrapper = {
        isUnsubscrive: false,
        next(val){
          if(this.isUnsubscrive) return;
          if(typeof subscriber === 'function') return subscriber(val)
          return subscriber.next ? subscriber.next(val) : null;
        },
        error(val){
          if(this.isUnsubscrive) return;
          this.unsubscribe();
          return subscriber.error ? subscriber.error(val) : null;
        },
        complete(){
          if(this.isUnsubscrive) return;
          this.unsubscribe();
          return subscriber.complete ? subscriber.complete() : null;
        },
        unsubscribe(){
          this.isUnsubscrive = true;
        }
    }

    this._setup(wrapper);
    return wrapper;
  }
}
