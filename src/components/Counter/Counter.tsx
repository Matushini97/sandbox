'use client';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { CounterType } from '@/store/CounterStore';

interface CounterProps {
    counter: CounterType;
}

export const Counter = observer(({ counter }: CounterProps) => {
    return (
        <div>
            <Title>{counter.count}</Title>
            <BtnContainer>
                <Button onClick={() => counter.increaseCount()}>+</Button>
                <Button onClick={() => counter.decreaseCount()}>-</Button>
            </BtnContainer>
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
