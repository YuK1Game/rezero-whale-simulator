import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Text } from 'grommet';

export default ({ children, point }) => {
    const number = parseFloat(children);

    let color = 'dark-1';
    number >= 0.6 && (color = 'neutral-3');
    number >= 0.7 && (color = 'neutral-1');
    number >= 0.8 && (color = 'status-error');
    number >= 0.9 && (color = 'neutral-2');

    return (
        <Text
            color={ color }
            >
            {number >= 1 ? (
                <Digit>
                    <Rainbow>100%</Rainbow>
                </Digit>
            ) : (
                <Digit>
                    { Math.floor(number * 100 * Math.pow(10, point || 0)) / Math.pow(10, point || 0) }%
                </Digit>
            )}
        </Text>
    )
}

const Digit = styled.span`
    font-family: Orbitron;
    font-weight: 900;
`;

const Animate = keyframes`
    to {
        background-position-x: 200%;        
    }
`;

const Rainbow = styled.span`
    text-transform: uppercase;
    background: linear-gradient(to right, #f00 0%, #f80 14.28%, #dd0 28.56%, #0d0 42.85%, #0dd 57.14%, #00f 71.42%, #e0e 85.71%, #f00 100%) 0% center / 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${ Animate } 4s linear infinite;
`;
