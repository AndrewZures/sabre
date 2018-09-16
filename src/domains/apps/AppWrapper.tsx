import * as React from 'react';

export const appWrapper = (Component: any) => {
    return (props: any) => (
        <div>
            <div style={{ backgroundColor: 'purple' }}>Header</div>
            <Component {...props} />
            <div style={{ backgroundColor: 'green' }}>Footer</div>
        </div>
    )
}