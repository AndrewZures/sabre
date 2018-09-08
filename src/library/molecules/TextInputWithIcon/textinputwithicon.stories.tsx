import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

import { storiesOf } from '@storybook/react';

import { TextInputWithIcon } from './TextInputWithIcon';

import { select, text, withKnobs } from '@storybook/addon-knobs';
import { Box } from '../../atoms/Container/Box';

import { action } from '@storybook/addon-actions';

const stories = storiesOf('Library/Molecules/TextInputWithIcon', module)
stories.addDecorator(withKnobs)

stories.add('standard', () => {
  const positionOptions = {
      left: 'left',
      right: 'right',
  }

  return (
      <ThemeProvider theme={theme}>
          <div>
              <Box variant="simple">
                  <TextInputWithIcon
                      input={{ placeholder: text('input placeholder', 'Choose') }}
                      iconPosition={select('icon position', positionOptions, 'left')}
                  >
                  	<span onClick={action('symbol-click')}>&euro;</span>
                  </TextInputWithIcon>
              </Box>
              <Box variant="simple">
                  <TextInputWithIcon input={{ placeholder: 'Left' }}>
                  	&euro;
                  </TextInputWithIcon>
              </Box>
              <Box variant="simple">
                  <TextInputWithIcon
                      input={{ placeholder: 'Right' }}
                      iconPosition='right'
                  >
                  	&euro;
                  </TextInputWithIcon>
              </Box>
          </div>
      </ThemeProvider>
  );
});