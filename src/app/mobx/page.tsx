'use client';
import { Counter } from '@/components/Counter/Counter';
import counterStore from '@/store/CounterStore';
import timerStore from '@/store/TimerStore';

export default function Mobx() {
    return (
        <div>
            <h2>Counter</h2>
            <Counter counter={counterStore} timer={timerStore} />
        </div>
    );
}
