import * as React from 'react';
import { Link } from 'react-router-dom';

const link = {
    textDecoration: 'none',
    color: 'grey',
    padding: '8px',
}

export default class Tacos extends React.Component {
    public render() {
        return (
            <div>
                <Link style={link} to="/examples">&lt; All Examples</Link>
                <div>Tacos</div>
            </div>
        );
    }
}