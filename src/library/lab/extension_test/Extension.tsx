import * as React from 'react';

import { SwitchProps, U, UVariant } from './Switch';


type VVariants =
    'ho'

type UnionCombo = UVariant & VVariants;
type InterCombo = UVariant | VVariants;

interface ComboInterface extends SwitchProps {
    variant?: InterCombo;
}

// Extension Class
// tslint:disable-next-line:max-classes-per-file
export class V extends React.PureComponent<ComboInterface> {
    
    public static newVariants: { [key in UnionCombo]: any } = {
        ho: { color: 'green' }
    }

    public static variants: { [key in UnionCombo]: any } = {...U.variants, ...V.newVariants }

    public render() {
        return <U {...this.props} variants={V.variants} />
    }
}