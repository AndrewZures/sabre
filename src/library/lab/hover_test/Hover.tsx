// import * as React from 'react';
import styled from 'styled-components';
import { color, ColorProps, space, SpaceProps } from 'styled-system';

const theme = {
    color: {
        red: 'red',
    },
    components: {
        button: {
            color: 'red',
            hover: {
                color: 'orange',
            }
        }
    }
}

interface OtherProps {
    hover?: boolean;
    variant?: string;
}

export const Hover = styled('div')<ColorProps & SpaceProps & OtherProps>`
    ${space}
    ${color}
    ${ props => theme.components.button[props.variant!] }
`

