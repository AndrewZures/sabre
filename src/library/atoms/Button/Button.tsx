import * as React from "react";
import styled from "styled-components";
import { mergeStyles } from "../../util/util";

import { ButtonVariant, variants } from './variants';

import { Theme } from "../../theme/types";

interface ButtonInterface {
    variant?: ButtonVariant;
    styling?: Theme;
}

const chooseVariant = (variantId?: ButtonVariant) => {
    return variants[variantId!] || variants.standard;
}

export const RawButton = styled('button').attrs<ButtonInterface>({})`
    box-sizing: border-box;
    ${mergeStyles}
`

export const Button = (props: any) => {
    return <RawButton {...props} variation={chooseVariant(props.variant)} />;
}

export const ExtendedButton = styled(Button)`
`

export class Hi extends React.PureComponent<ButtonInterface> {
    public render() {
        const variation = { variation: chooseVariant(this.props.variant!) }
        return <RawButton {...this.props} {...variation} />;
    }
}