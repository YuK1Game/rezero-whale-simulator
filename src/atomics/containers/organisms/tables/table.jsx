import React, { Fragment, useState, useEffect } from 'react';
import { Grid, Box, Heading, Text } from 'grommet';

import BaseProperties from '../../../../configs/base';
import NormaProperties from '../../../../configs/norma';
import Calculator from '../../../../services/calculator';
import Percentage from '../../../components/atoms/typographics/percentage';

const areases = [{
    name: 'header',
    start: [0, 0],
    end: [NormaProperties.length, 0]
}, {
    name: 'b-header',
    start: [0, 1],
    end: [1, 1]
}]
.concat(NormaProperties.map((norma, normaIndex) => {
    return [{
        name: `h${ norma }-header`,
        start: [normaIndex + 1, 1],
        end: [normaIndex + 1, 1]
    }];
}))
.concat(BaseProperties.map((base, baseIndex) => {
    return [{
        name: `b${ base }-subject`,
        start: [0, baseIndex + 2],
        end: [0, baseIndex + 2]
    }].concat(NormaProperties.map((norma, normaIndex) => {
        return {
            name: `b${ base }-h${ norma }`,
            start: [normaIndex + 1, baseIndex + 2],
            end: [normaIndex + 1, baseIndex + 2]
        };
    }));
}))
.flat();

export default props => {
    const [ calcus, setCalcus ] = useState(new Calculator(props.icons));

    useEffect(() => {
        setCalcus(new Calculator(props.icons));
    }, [ props.icons ]);

    const Row = ({ base }) => (
        <Fragment>
            <Box
                gridArea={`b${ base }-subject`}
                background={'light-4'}
                justify={'center'}
                align={'center'}
                >
                <Percentage>{ base / 100 }</Percentage>
            </Box>
            {NormaProperties.map(norma => (
                <Box 
                    key={ norma }
                    gridArea={`b${ base }-h${ norma }`}
                    background={'light-1'}
                    justify={'center'}
                    align={'center'}
                    >
                    <Percentage>
                        { calcus.destroyPercentage(base / 100, norma) }
                    </Percentage>
                </Box>
            ))}
        </Fragment>
    );

    return (
        <Fragment>
            <Grid
                fill
                rows={['xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall']}
                columns={['flex', 'flex', 'flex', 'flex']}
                gap={'xsmall'}
                areas={ areases }
                >

                <Box 
                    gridArea={'header'}
                    background={'brand'}
                    justify={'center'}
                    align={'center'}
                    >
                    <Heading level={ 5 }>撃破期待度早見表</Heading>
                </Box>

                <Box 
                    gridArea={'b-header'}
                    background={'light-4'}
                    justify={'center'}
                    align={'center'}
                    >
                    <Text size={'small'} weight={'bold'}>初期撃破率</Text>
                </Box>

                {NormaProperties.map(norma => (
                    <Box 
                        key={ norma }
                        gridArea={`h${ norma }-header`}
                        background={'light-4'}
                        justify={'center'}
                        align={'center'}
                        >
                        <Text size={'small'} weight={'bold'}>{ norma }体目撃破率</Text>
                    </Box>
                ))}

                {BaseProperties.map(base => (
                    <Row key={ base } base={ base } />
                ))}
            </Grid>
        </Fragment>
    )
};