import * as React from 'react';
import { ThemeProvider as BaseThemeProvider } from 'styled-components';
import { ThemeGlobal } from './ThemeGlobal';

interface ThemeProviderProps {
    theme: any,
    children?: any,
}

export class ThemeProvider extends React.Component<ThemeProviderProps> {
    public render() {
        return (
            <BaseThemeProvider theme={this.props.theme}>
                <ThemeGlobal>
                    {this.props.children}
                </ThemeGlobal>
            </BaseThemeProvider>
        );
    }
}