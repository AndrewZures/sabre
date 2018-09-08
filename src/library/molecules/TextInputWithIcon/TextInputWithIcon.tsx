import * as React from 'react';

import { BaseL, TextInput } from '../../atoms/TextInput/TextInput';

import { Box } from '../../atoms/Container/Box';
import { Theme } from '../../theme/types';

import { iconTextVariants, iconVariants } from './variants';


interface TextInputWithIconInterface {
    // figure out correct input Interface
    input?: BaseL | any;
    iconPosition: 'left' | 'right';
}

export class TextInputWithIcon extends React.PureComponent<TextInputWithIconInterface> {
    public static defaultProps: Partial<TextInputWithIconInterface> = {
        iconPosition: 'left',
    }

    public styling: { [key: string]: Partial<Theme> } = {
        container: {
            position: 'relative',
            width: 400,
        },
    }

    public render() {
        const { iconPosition, input } = this.props;
        return (
            <Box styling={this.styling.container}>
                <TextInput
                    {...input }
                    styling={iconTextVariants[iconPosition]}
                />
                <Box styling={iconVariants[iconPosition]}>
                    {this.props.children}
                </Box>
            </Box>
        )
    }
}