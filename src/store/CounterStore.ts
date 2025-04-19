import { makeAutoObservable, runInAction } from 'mobx';

class CounterStore {
    count = 0;
    data: Record<string, unknown> = {};
    loading = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    // Existing synchronous actions
    increaseCount() {
        this.count += 1;
    }

    decreaseCount() {
        this.count -= 1;
    }

    async fetchData() {
        this.loading = true;
        this.error = null;

        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/todos/1'
            );
            const data = await response.json();

            runInAction(() => {
                this.data = data;
                this.loading = false;
            });
        } catch (error) {
            runInAction(() => {
                this.error =
                    error instanceof Error
                        ? error.message
                        : 'Failed to fetch data';
                this.loading = false;
            });
        }
    }
}

const counterStore = new CounterStore();
export default counterStore;
export type CounterType = typeof counterStore;
