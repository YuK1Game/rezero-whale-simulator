import React, { useState } from 'react';
import { DropButton, Box, Button, Stack } from 'grommet';
import { Close } from 'grommet-icons';
import IconProperties from '../../../../configs/icons';

export default props => {

    const addIcon = iconName => {
        setOpen(false);
        updateIcon(icons.concat([ iconName ]));
    }

    const removeIcon = index => {
        updateIcon(icons.filter((n, i) => i !== index));
    };

    const updateIcon = icons => {
        setIcons(icons);
        props.onChange(icons);
    };

    const [open, setOpen] = useState(false);
    const [icons, setIcons] = useState(props.default || []);

    return (
        <React.Fragment>
            <DropButton
                label={'Test select'}
                open={ open }
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                dropAlign={{ top: 'bottom', right: 'right' }}
                dropContent={
                    <Box 
                        pad={'small'}
                        background={'light-2'}
                        direction={'row'}
                        wrap={ true }
                        >
                        {Object.keys(IconProperties).map(key => {
                            const Icon = IconProperties[key].component;
                            return (
                                <Button
                                    key={ key }
                                    icon={ <Icon /> }
                                    onClick={() => addIcon( key )}
                                    />
                            )
                        })}
                    </Box>
                }
                />

            <Box
                pad={'small'}
                background={'light-3'}
                border={'bottom'}
                direction={'row'}
                wrap={ true }
                margin={{
                    top : '20px',
                    bottom: '20px',
                }}
                >
                {icons.map((iconName, index) => {
                    const Icon = IconProperties[iconName].component;

                    return (
                        <Stack
                            pad={'small'}
                            key={ index }
                            anchor={'top-right'}
                            >
                            <Icon />
                            <Close onClick={() => removeIcon(index)} />
                        </Stack>
                    )
                })}
            </Box>

        </React.Fragment>
    )
};