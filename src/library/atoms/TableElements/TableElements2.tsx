import * as React from 'react';
import styled from 'styled-components';

// import { mergeStyles } from '../../util/util';

import { ColorProps, SpaceProps } from 'styled-system';
import { mergeStyles } from '../../util/util';

const RawTable = styled('table')`
    box-sizing: border-box;
`

const tableProps = {
    display: 'flex',
    flexDirection: 'column',
    p: 2,
}

export const Table = (props: any) => {
    return <RawTable {...props} styling={tableProps} />
}

export const Thead = styled('thead')<SpaceProps & ColorProps>``

// const theadProps = {
//     backgroundColor: '#F5F7FA',
//     pl: 4,
//     pr: 4,
// }

// export const Thead = (props: any) => {
//     return </>
// }

const RawTr = styled('tr')`
    box-sizing: border-box;
`

const trProps = {
    display: 'flex',
    alignItems: 'center',
    height: 56,
}

export const Tr = (props: any) => {
    return <RawTr {...props} styling={trProps} />
}

const RawTbody = styled('tbody')`
`

const tbodyProps = {
    width: '100%',
}

export const Tbody = (props: any) => {
    return <RawTbody {...props} styling={tbodyProps} />
}

const RawTh = styled('th')`
`

// const thProps = {
//     flexGrow: 1,
//     flexBasis: 1/2,
//     textAlign: 'start'
// }

export const Th = (props: any) => {
    return <RawTh>{props.children}</RawTh>
}

const RawTrb = styled('tr')`
`

const trbProps = {
    display: 'flex',
    alignItems: 'center',
    height: 56,
    borderBottom: '1px solid #CFD6E5',
    paddingLeft: '16px',
    paddingRight: '16px',
}

export const Trb = (props: any) => {
    return <RawTrb {...props} styling={trbProps}>{props.children}</RawTrb>
}

// interface StyleStuff {
//     styling?: any;
// }

const RawTd = styled.td`
    ${mergeStyles}
`
// export const Td = Tdr;

const tdProps = {
    flexGrow: 1,
    flexBasis: 1/2,
}

export const Td = (props: any) => {
    return <RawTd {...props} styling={tdProps}>{props.children}</RawTd>;
}