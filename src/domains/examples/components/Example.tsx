import * as React from 'react';

import * as exampleActions from '../actions/exampleActions';

import { connect } from 'react-redux';


interface Props {
    increment: () => void;
    decrement: () => void;
    count: number;
}

const container = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange'
}

const inputContainer = {
    maxWidth: '400px',
    width: '50%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
}

const input = {
    fontSize: '70px',
    padding: '8px',
    width: '100px',
    height: '100px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '4px',
}

const buttonInput = {
    ...input,
    backgroundColor: 'white',
}

class Example extends React.Component<Props> {
    public render() {
        return (
            <div style={container}>
                <div style={inputContainer}>
                    <button style={buttonInput} onClick={this.props.increment}>&#43;</button>
                    <div style={input}>{this.props.count}</div>
                    <button style={buttonInput} onClick={this.props.decrement}>&#45;</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    count: state.examples.count,
})

const mapDispatchToProps = (dispatch: any) => ({
    increment: () => dispatch({ type: exampleActions.INCREMENT }),
    decrement: () => dispatch({ type: exampleActions.DECREMENT })
})

export default connect(mapStateToProps, mapDispatchToProps)(Example);