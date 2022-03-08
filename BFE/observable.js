class Observable {
  constructor(setup){
        this._setup = setup;
    }

    subscribe(subscriber) {
        const sub_wrapper = {
            unsubscribed: false,
            next(val){
                if(this.unsubscribed) return;
                if (subscriber instanceof Function) return subscriber(val);
                return subscriber.next ? subscriber.next(val) : null;
            },
            error(val){
                if(this.unsubscribed) return;
                this.unsubscribe();
                return subscriber.error ? subscriber.error(val) : null;
            },
            complete(){
                if(this.unsubscribed) return;
                this.unsubscribe();
                return subscriber.complete ? subscriber.complete() : null;
            },
            unsubscribe(){
                this.unsubscribed = true;
            }
        }

        this._setup(sub_wrapper); 
        return sub_wrapper;
    }
}