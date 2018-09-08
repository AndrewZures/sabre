import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

import { storiesOf } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs';
import { Box } from '../../atoms/Container/Box';
import { TextDropdown } from './TextDropdown';

import { Animation } from '../../atoms/Animation/Animation';
import { Card } from '../../atoms/Card/Card';

const stories = storiesOf('Library/Molecules/TextDropdown', module)
stories.addDecorator(withKnobs)

stories.add('standard', () => {
  const onChange = () => window.console.log('keyup');
  const onToggle = (state: string) => window.console.log(`toggling to ${state}`);
  return (
      <ThemeProvider theme={theme}>
            <Box styling={{ width: 400 }}>
                <TextDropdown
                    input={{ placeholder: 'Total', onChange }}
                    onToggle={onToggle}
                >
                    <Animation>
                        <Card variant="standard">
                            <Box styling={{ color: 'primary', '&:hover': { color: 'success' }}}>1</Box>
                            <Box styling={{ color: 'primary', '&:hover': { color: 'success' }}}>2</Box>
                            <Box styling={{ color: 'primary', '&:hover': { color: 'success' }}}>3</Box>
                        </Card>
                    </Animation>
                </TextDropdown>
            </Box>
      </ThemeProvider>
  );
});