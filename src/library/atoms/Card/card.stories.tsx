import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

import { withKnobs } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';

import { Card } from './Card';

import { Box } from '../Container/Box';

const stories = storiesOf('Library/Atoms/Card', module)
stories.addDecorator(withKnobs)

stories.add('default', () => {
  return (
      <ThemeProvider theme={theme}>
        <Box variant="centered" styling={{ bg: 'background', width: 500, height: 500 }}>
          <Card variant="standard" styling={{ width: 400, height: 400 }} />
        </Box>
      </ThemeProvider>
  );
});