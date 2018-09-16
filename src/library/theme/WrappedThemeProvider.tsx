import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeGlobal } from './ThemeGlobal';

interface WrappedThemeProviderProps {
    theme: any,
    children?: any,
}

export class WrappedThemeProvider extends React.Component<WrappedThemeProviderProps> {
    public render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <ThemeGlobal>
                    {this.props.children}
                </ThemeGlobal>
            </ThemeProvider>
        );
    }
}