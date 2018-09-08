import styled from 'styled-components';
import { mergeStyles } from '../../util/util';

import { Theme } from '../../theme/types';

interface ContainerInterface {
    styling?: Partial<Theme>;
}

export const S = styled('div')<ContainerInterface>`
    ${mergeStyles}
`