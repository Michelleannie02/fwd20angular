class Observable {
    constructor(observerFunction) {
        this._observerFunction = observerFunction;
    }

    subscribe(observer) {
        return this._observerFunction(observer)
    }
}
                                                    //RAST TILL 11:10
let testObservable = new Observable(
    observer => {
        setTimeout(() => {
            observer.next("Data recieved")
            observer.complete()
        }, 1000)
    }
);

let testObserver = {
    next(data) {
        console.log(data)
    },
    error(err) {
        console.log(err)
    },
    complete() {
        console.log("request complete")
    }
};

testObservable.subscribe(testObserver);