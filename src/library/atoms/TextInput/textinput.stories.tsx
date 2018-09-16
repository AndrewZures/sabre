import * as React from 'react';
import { theme } from '../../theme/theme';

import { object, select, text, withKnobs } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';

import { TextInput, variants } from './TextInput';

import { ThemeProvider } from 'styled-components';


const stories = storiesOf('Library/Atoms/TextInput', module)
stories.addDecorator(withKnobs)

const variantOptions = {
    standard: 'standard',
    secondary: 'secondary',
}

  stories.add('default', () => {
    return (
        <ThemeProvider theme={theme}>
            <TextInput
                placeholder={text('placeholder', 'Placeholder text')}
                variant={select('variant', variantOptions, 'standard')}
            />
        </ThemeProvider>
    );
  })
  .add('customized', () => {
    const selectedVariant = select('variant', variantOptions, 'standard');
    return (
        <ThemeProvider theme={theme}>
            <TextInput
                placeholder={text('placeholder', 'Placeholder text')}
                variant={selectedVariant}
                styling={object('styling', variants[selectedVariant])}
            />
        </ThemeProvider>
    );
  });