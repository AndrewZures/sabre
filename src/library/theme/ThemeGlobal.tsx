import styled from 'styled-components';

export const ThemeGlobal = styled('div')`
    font-family: ${props => props.theme.fonts.sansSerif };
    font-size: ${props => props.theme.fontSizes[2] };
`