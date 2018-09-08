import * as React from 'react';
import { Box } from '../../atoms/Container/Box';
import { TextInputWithIcon } from '../TextInputWithIcon/TextInputWithIcon';

type DropdownStatus =
    'open' |
    'closed'

interface DropdownProps {
    isOpen?: boolean;
    onToggle?: (state: DropdownStatus) => void,
    input?: any,
}

interface DropdownState {
    isOpen: boolean;
}

export class TextDropdown extends React.PureComponent<DropdownProps, DropdownState> {
    public readonly state: Readonly<DropdownState> = {
        isOpen: this.props.isOpen || false,
    }

    public render() {
        return (
            <Box>
                <TextInputWithIcon input={this.props.input}>
                    <span onClick={this.toggleDropdown}>+</span>
                </TextInputWithIcon>
                {this.state.isOpen && this.props.children}
            </Box>
        );
    }

    private toggleDropdown = () => {
        const newState = !this.state.isOpen
        const stateString = newState ? 'open' : 'closed'
        if (this.props.onToggle) { this.props.onToggle(stateString) }
        this.setState({ isOpen: !this.state.isOpen })
    }
}