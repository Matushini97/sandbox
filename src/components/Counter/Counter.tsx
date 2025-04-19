'use client';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { CounterType } from '@/store/CounterStore';
import { TimerType } from '@/store/TimerStore';

interface CounterProps {
    counter: CounterType;
    timer: TimerType;
}

export const Counter = observer(({ counter, timer }: CounterProps) => {
    // State for API data
    const [apiData, setApiData] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((res) => {
                if (!res.ok) throw new Error('Network error');
                return res.json();
            })
            .then((data) => {
                setApiData(data.title);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <Title data-testid="counter-value">{counter.count}</Title>
            <div data-testid="timer-value">{timer.getSecondsPass()}</div>
            <BtnContainer>
                <Button
                    data-testid="increase-btn"
                    onClick={() => counter.increaseCount()}
                >
                    +
                </Button>
                <Button
                    data-testid="decrease-btn"
                    onClick={() => counter.decreaseCount()}
                >
                    -
                </Button>
            </BtnContainer>
            <ApiSection data-testid="api-section">
                {loading && <span>Loading...</span>}
                {error && <span>Error: {error}</span>}
                {apiData && <span>API Response: {apiData}</span>}
            </ApiSection>
        </div>
    );
});

const Button = styled.button`
    border: 1px solid red;
    padding: 20px;
`;

const Title = styled.h2`
    text-align: center;
    color: white;
`;

const BtnContainer = styled.div`
    display: flex;
    width: 200px;
`;

const ApiSection = styled.div`
    margin-top: 20px;
    color: #00e676;
`;
