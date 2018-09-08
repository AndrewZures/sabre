import { BaseT, BaseY } from '../Base/TextInput';

import { ColorProps, SpaceProps } from 'styled-system';

import * as React from 'react';
import { StyledComponentClass } from 'styled-components';
import styled from 'styled-components';
import { mergeStyles } from '../../util/util';

const standard = {
    fontSize: 2,
    p: 2,
    pl: 3,
    border: 1,
    borderRadius: 1,
    height: 36,
    width: 400,
    borderColor: 'guideBorder',
    color: 'primary',

    '&::-webkit-input-placeholder': {
        color: 'guide',
    },
    // '&:hover': {
    //     borderColor: 'error',
    // },

    '&:focus': {
        outline: 'none',
    },
}

const secondary = {
    fontSize: 5,
    p: 2,
    border: 1,
    borderRadius: 1,
    width: 400,
    borderColor: "guideBorder",
    color: "success",

    '&::-webkit-input-placeholder': {
        color: 'secondary',
    },
}

export const variants = {
    standard,
    secondary
}

const chooseVariant = (variantId: string) => {
    switch(variantId) {
        case 'secondary': return secondary;
        default: return standard;
    }
}

export type TextInputVariant =
    'standard' |
    'secondary'

export interface TextInputInterface {
    variant?: TextInputVariant;
    styling?: any;
}

export type BaseK = Partial<TextInputInterface & BaseY>

type BaseM = ColorProps & SpaceProps & TextInputInterface;
export type BaseL = BaseT & BaseM;
export type BaseJ = StyledComponentClass<BaseM, any, BaseT & BaseM>



export const TextInputTemp = styled('input').attrs<TextInputInterface>({})`
    box-sizing: border-box;
    ${mergeStyles}
`

export const TextInput = (props: any) => {
    return <TextInputTemp {...props} variation={chooseVariant(props.variant)} />;
}