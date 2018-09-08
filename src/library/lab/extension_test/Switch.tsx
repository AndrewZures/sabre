import * as React from 'react';

import { S } from './Base';

export interface SwitchProps {
    variant?: any;
    variants?: any,
    styling?: any;
    children?: any;
}

export type UVariant =
    'hi'

// Base 'Variant' Class
// tslint:disable-next-line:max-classes-per-file
export class U extends React.PureComponent<SwitchProps> {
    public static variants: { [key in UVariant]: any } = {
        hi: { color: 'orange' }
    }

    public static defaultProps: Partial<SwitchProps> = {
        variants: U.variants,
    }

    public render() {
        return <S {...this.props} styling={this.mergeVariant()} />
    }

    private mergeVariant = () => {
        const { variant, variants, styling } = this.props;
        return variant && variants ? {...styling, ...(variants[variant] || {})} : styling;
    }
}