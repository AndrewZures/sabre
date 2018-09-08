import * as React from 'react';
import { RawContainer } from '../Container/Box';

export type CardVariant =
    'standard'

const standard = {
    borderRadius: 2,
    bg: 'white',
    boxShadow: 'raised',
    width: '100%',
}


export const variants = {
    standard,
}

const chooseVariant = (variantId?: CardVariant) => {
    return variants[variantId!] || {};
}

export const Card = (props: any) => {
    return <RawContainer {...props} variation={chooseVariant(props.variant)} />;
}

// Component that can check variants and figure out which one should work
// method to extend variants in a way where additional variants can be added (HOC?)