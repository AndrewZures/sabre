import * as React from 'react';

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
            <table style={{ display: 'flex', flexDirection: 'column', padding: '8px' }}>
                <thead style={{
                        backgroundColor: '#F5F7FA', paddingLeft: '16px', paddingRight: '16px',
                    }}>
                    <tr style={{
                        display: 'flex',
                        height: '56px',
                        alignItems: 'center',
                    }}>
                        {headerValues && this.renderHeaderValues(headerValues)}
                    </tr>
                </thead>
                <tbody style={{ width: '100%' }}>
                    {this.renderValues(values)}
                </tbody>
            </table>
        )
    }

    private renderHeaderValues = (headerValues: string[]) => {
        return headerValues.map((vs, idx) => <th key={idx} style={{ flexGrow: 1, flexBasis: (1/headerValues.length), textAlign: 'start' }}>{vs}</th>)
    }

    private renderValues = (values: any[]) => {
        return values.map((r, idx) => {
            return <tr
                key={idx}
                style={{
                    display: 'flex',
                    borderBottom: '1px solid #CFD6E5',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    height: '56px',
                    alignItems: 'center',
                }}>
                {r.map((v: any, vidx: number) => {
                    return <td
                        key={vidx}
                        style={{ flexGrow: 1, flexBasis: (1/r.length) }}>{v}</td>
                })}
            </tr>
        });
    }
}