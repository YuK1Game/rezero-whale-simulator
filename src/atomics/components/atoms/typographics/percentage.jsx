import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
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
            <Digit>
                { Math.floor(number * 100 * Math.pow(10, point || 0)) / Math.pow(10, point || 0) }%
            </Digit>
        </Text>
    )
}

const Digit = styled.span`
    font-family: Orbitron;
    font-weight: 900;
`;