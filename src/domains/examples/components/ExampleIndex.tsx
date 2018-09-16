import * as React from 'react';
import { Link } from 'react-router-dom';

export class ExampleIndex extends React.Component {
    public render() {
        return (
            <div>
                <div>
                    <Link to="/examples/counter">Basics of Redux Flow: Counter</Link>
                </div>
                <div>
                    <Link to="/examples/tacos">Basics of Async Flow with Redux: Tacos</Link>
                </div>
            </div>
        );
    }
}