import * as React from 'react';
import { theme } from '../../theme/theme';

import { text, withKnobs } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';

import { Button, Hi } from './Button';

import { action } from '@storybook/addon-actions';
import { Box } from '../Container/Box';

import { ThemeProvider } from '../../theme/ThemeProvider';


  const stories = storiesOf('Library/Atoms/Button', module)
  stories.addDecorator(withKnobs)

  stories.add('default', () => {
    const PresBox = (props: any) => <Box styling={{ p: 2 }}>{props.children}</Box>;
    const label = text('label', 'Label')
    return (
        <ThemeProvider theme={theme}>
            <PresBox>
                <PresBox>
                    <Hi variant="standard">
                        {label}
                    </Hi>
                </PresBox>
                <PresBox>
                    <Button variant="primary"
                        onClick={action('primary-button-click')}
                    >
                        {label}
                    </Button>
                </PresBox>
                <PresBox>
                    <Button variant="subtle">
                        {label}
                    </Button>
                </PresBox>
                <PresBox>
                    <Button variant="toggled">
                        {label}
                    </Button>
                </PresBox>
                <PresBox>
                    <Button variant="warning">
                        {label}
                    </Button>
                </PresBox>
            </PresBox>
        </ThemeProvider>
    );
  })