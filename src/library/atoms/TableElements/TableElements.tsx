import * as React from 'react';
import styled from 'styled-components';

import { mergeStyles } from '../../util/util';

const RawTable = styled('table')`
    box-sizing: border-box;
    ${mergeStyles}
`

const tableProps = {
    display: 'flex',
    flexDirection: 'column',
    p: 2,
}

export const Table = (props: any) => {
    return <RawTable {...props} styling={tableProps} />
}

export const RawThead = styled('thead')`
    box-sizing: border-box;
    ${mergeStyles}
`

const theadProps = {
    backgroundColor: '#F5F7FA',
    pl: 4,
    pr: 4,
}

export const Thead = (props: any) => {
    return <RawThead {...props} styling={theadProps} />
}

const RawTr = styled('tr')`
    box-sizing: border-box;
    ${mergeStyles}
`

const trProps = {
    display: 'flex',
    alignItems: 'center',
    height: 56,
    p: 1,
}

export const Tr = (props: any) => {
    return <RawTr {...props} styling={trProps} />
}

const RawTbody = styled('tbody')`
    box-sizing: border-box;
    ${props => mergeStyles(props, true)}
`

const tbodyProps = {
    width: '100%',
}

export const Tbody = (props: any) => {
    return <RawTbody {...props} styling={tbodyProps} />
}

const RawTh = styled('th')`
    box-sizing: border-box;
    ${mergeStyles}
`

const thProps = {
    flexGrow: 1,
    flexBasis: 1/2,
    textAlign: 'start'
}

export const Th = (props: any) => {
    return <RawTh {...props} styling={thProps} />
}

const RawTrb = styled('tr')`
    box-sizing: border-box;
    ${mergeStyles}
`

const trbProps = {
    ...trProps,
    borderBottom: '1px solid #CFD6E5',
    paddingLeft: '16px',
    paddingRight: '16px',

    '&:last-child': {
        borderBottom: 'none',
    }
}

export const Trb = (props: any) => {
    return <RawTrb {...props} styling={trbProps} />
}

interface StyleStuff {
    styling?: any;
}

const RawTd = styled('td').attrs<StyleStuff>({})`
    box-sizing: border-box;
    ${mergeStyles}
`

const tdProps = {
    flexGrow: 1,
    flexBasis: 1/2,
}

export const Td = (props: any) => {
    return <RawTd styling={tdProps}>{props.children}</RawTd>;
}