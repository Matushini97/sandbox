import { makeAutoObservable } from 'mobx';

class CounterStore {
    count = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increaseCount() {
        this.count += 1;
    }
    decreaseCount() {
        this.count -= 1;
    }
}

const counterStore = new CounterStore();

export default counterStore;
export type CounterType = typeof counterStore;
