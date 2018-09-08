import * as React from 'react';
import { Table as BaseTable, Tbody, Td, Th, Thead, Tr, Trb } from '../../atoms/TableElements/TableElements';


interface TableProps {
    // ['App Name', 'Status']
    // [['First App Name', 'First Status']]
    headerValues?: string[];
    values: any[][];
}

export class Table extends React.Component<TableProps> {
    public render() {
        const { headerValues, values } = this.props;
        return (
            <BaseTable styling={{ overflow: 'auto', maxHeight: '95vh'}}>
                {headerValues &&
                    <Thead>
                        <Tr>{headerValues.map((v, i) => <Th key={i}>{v}</Th>)}</Tr>
                    </Thead>
                }

                <Tbody>
                    {values.map((row, i) =>
                        <Trb key={i}>{row.map((val: any, j: number) =>
                            <Td key={j}>{val}</Td>)}
                        </Trb>
                    )}
                </Tbody>
            </BaseTable>
        )
    }
}