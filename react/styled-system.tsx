import React from 'react';
import styled from 'styled-components';
import {
    flexbox, FlexboxProps,
    layout, LayoutProps,
    position, PositionProps,
    space, SpaceProps,
} from 'styled-system';

interface BoxProps extends SpaceProps, LayoutProps, FlexboxProps, PositionProps {
    children: ReactNode;
}

export const Box = styled.div<BoxProps>(
    {
        boxSizing: 'border-box',
    },
    layout,
    flexbox,
    space,
    position
);

// now you have full width wrapper, with margin and flexbox

export const Component = () => (
    <Box
        display="flex"
        justifyContent="end"
        mt={3}
        width={1}
    >
        content
    </Box>
)
