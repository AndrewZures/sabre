import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';

import { withKnobs } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';
import { Box } from '../Container/Box';

import { Theme } from '../../theme/types';

import { Animation } from '../../atoms/Animation/Animation';


const stories = storiesOf('Library/Atoms/Colors', module)
stories.addDecorator(withKnobs)

stories.add('default', () => {
    return (
        <ThemeProvider theme={theme}>
            <Box variant="centered" styling={{ p: 7, fontFamily: 'sans-serif' }}>
                <Box variant="horizontalCentered" styling={{ maxWidth: 950, flexGrow: '1', }}>
                    {renderTable(colors)}
                </Box>
          </Box>
        </ThemeProvider>
    );
});

const colorSwatchContainer: Partial<Theme> = {
    width: 180,
    height: 100,
    display: 'flex',
    justifyContent: 'space-between',
}

const colorSwatchDetails: Partial<Theme> = {
    width: '50%',
    justifyContent: 'center',
    textTransform: 'capitalize',
    alignItems: 'normal',
    lineHeight: 1.4,
}

const colorSwatchStyles = (k: string): Partial<Theme> => {
    return {
        bg: k,
        width: 80,
        height: 80,
        borderRadius: 2,
        '&:hover':  {
            boxShadow: 'floating'
        }
    }
}

const renderTable = (columnData: any) => {
    const columns = Object.keys(columnData);
    return columns.map((c, idx) => {
        return (
            <Box variant="verticalCentered" key={idx} styling={{ flexBasis: (1/columns.length) }}>
                {Object.keys(columnData[c]).map((k, vidx) => {
                    return <Animation key={vidx} time={vidx}>
                                <Box styling={colorSwatchContainer}>
                                    <Box variant="verticalCentered" styling={colorSwatchDetails}>
                                        <div>{k.replace('_', ' ')}</div>
                                        <div>{columnData[c][k]}</div>
                                    </Box>
                                    <Box variant='centered' styling={{ width: '50%' }}>
                                         <Box styling={colorSwatchStyles(k)} />
                                    </Box>
                                </Box>
                           </Animation>
                })}
            </Box>
        );
    })
};

const colors = {
  action: {
    action: "#3F69FE",
    selected: "#EDF0FE"
  },
  text: {
    primary: "#303540",
    secondary: "#72767F",
    guide: "#ABB1BE",
    guideBorder: "#D1D7E0",
    stroke: "#CFD6E5"
  },
  brand: {
    brand: "#273A8A",
    background: "#F5F7FA",
  },
  calls: {
    success: "#30AB30",
    warning: "#FFD24D",
    warning_hover: '#FFDE7E',
    error: "#F0603C"
  }
};