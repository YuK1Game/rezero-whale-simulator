import React from 'react';
import { Box } from 'grommet';
import Image from '../images/image'

export default props => (
    <Box
        width={'64px'}
        height={'64px'}
        pad={'xxsmall'}
        >
        <Image
            fit={'contain'}
            {...props}
            />
    </Box>
)