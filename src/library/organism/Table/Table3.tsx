import * as React from 'react';
import { Table as BaseTable, Tbody, Th, Thead, Tr } from '../../atoms/TableElements/TableElements';


interface TableProps {
    // ['App Name', 'Status']
    // [['First App Name', 'First Status']]
    headerValues?: string[];
    values: any[];
    renderRow?: any;
}

export class Table extends React.Component<TableProps> {
    public render() {
        const { headerValues } = this.props;
        return (
            <BaseTable>
                {headerValues &&
                    <Thead bg="#F5F7FA" pl={4} pr={4}>
                        <Tr>{headerValues.map((v, i) => <Th key={i}>{v}</Th>)}</Tr>
                    </Thead>
                }
                <Tbody>
                    {this.props.children}
                </Tbody>
            </BaseTable>
        )
    }
}