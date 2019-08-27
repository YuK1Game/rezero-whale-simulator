import React from 'react';
import { Box, Grommet } from 'grommet';

const theme = {
    global: {
        font: {
            family: 'Roboto',
            size: '14px',
            height: '20px',
        },
    },
};

const AppBar = props => (
    <Box
        tag={'header'}
        direction={'row'}
        align={'center'}
        justify={'between'}
        background={'brand'}
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation={'medium'}
        style={{ zIndex: '1' }}
        { ...props }
        />
);

const Layout = props => {
    return (
        <Grommet theme={ theme }>
            <AppBar>{ props.title }</AppBar>
            <Box pad={'small'}>
                { props.children }
            </Box>
        </Grommet>
    )
};

Layout.defaultProps = {
    title : 'Subject',
};
  
export default Layout;