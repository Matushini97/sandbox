'use client';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { CounterType } from '@/store/CounterStore';
import { TimerType } from '@/store/TimerStore';

interface CounterProps {
    counter: CounterType;
    timer: TimerType;
}

export const Counter = observer(({ counter, timer }: CounterProps) => {
    useEffect(() => {
        counter.fetchData();
    }, [counter]);
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
                {counter.loading && <span>Loading...</span>}
                {counter.error && <span>Error: {counter.error}</span>}
                {counter.data && (
                    <span>
                        API Response:{' '}
                        {typeof counter.data === 'object'
                            ? JSON.stringify(counter.data)
                            : counter.data}
                    </span>
                )}
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
