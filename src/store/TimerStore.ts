import { makeAutoObservable } from 'mobx';

class TimerStore {
    secondsPassed = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increaseTimer() {
        this.secondsPassed++;
    }

    getSecondsPass() {
        return this.secondsPassed;
    }
}

const timerStore = new TimerStore();

export default timerStore;
export type TimerType = typeof timerStore;

setInterval(() => {
    timerStore.increaseTimer();
}, 1000);
