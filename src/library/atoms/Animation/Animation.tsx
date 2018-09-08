import { css, keyframes } from 'styled-components';
import { Box } from '../Container/Box';

import styled from 'styled-components';

// const rotate360 = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;

export const fadeIn = keyframes`
    from  {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`

interface Props {
    time?: number;
    delay?: number;
}

export const Animation = styled(Box)<Props>`
    animation: ${props => css`
        ${fadeIn} ${props.time || .3}s ease-in ${props.delay && `${props.delay}s`}
     `}
`