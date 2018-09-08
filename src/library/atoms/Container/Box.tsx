import * as React from "react";
import styled from "styled-components";
import { mergeStyles } from "../../util/util";

import { ContainerVariant, variants } from './variants';

import { Theme } from "../../theme/types";

interface ContainerInterface {
    variation?: any;
    variant?: ContainerVariant;
    styling?: Partial<Theme>;
    children?: any;
}

const chooseVariant = (variantId?: ContainerVariant) => {
    return variants[variantId!] || {};
}

export const RawContainer = styled('div').attrs<ContainerInterface>({})`
    box-sizing: border-box;
    ${mergeStyles}
`

export const Box = (props: ContainerInterface) => {
    return <RawContainer {...props} variation={chooseVariant(props.variant)} />;
}