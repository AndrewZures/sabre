import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

import { storiesOf } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs';

import { Hover } from './Hover';

const stories = storiesOf('Lab/Hover', module)
stories.addDecorator(withKnobs)

stories.add('simple', () => {
  return (
      <ThemeProvider theme={theme}>
        <div>
          <Hover color="orange" hover={true}>Hover Test</Hover>
        </div>
      </ThemeProvider>
  );
})