'use client';
import { Counter } from '@/components/Counter/Counter';
import counterStore from '@/store/CounterStore';

export default function Mobx() {
    return (
        <div>
            <h2>Counter</h2>
            <Counter counter={counterStore} />
        </div>
    );
}
