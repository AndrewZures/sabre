import {
    ResponsiveAlignContentValue,
    ResponsiveAlignItemsValue,
    ResponsiveAlignSelfValue,
    ResponsiveBoxShadowValue,
    ResponsiveColorValue,
    ResponsiveDisplayValue,
    ResponsiveFlexDirectionValue,
    ResponsiveFlexWrapValue,
    ResponsiveFontWeightValue,
    ResponsiveJustifyContentValue,
    ResponsiveOpacityValue,
    ResponsivePositionValue,
    ResponsiveSpaceValue,
    ResponsiveTextAlignValue,
    ResponsiveVerticleAlignValue,
} from 'styled-system';

export interface Theme {
    boxShadow?: BoxShadows;
    borderRadius: any,
    space?: number[];
    fontSizes?: number[];
    display?: ResponsiveDisplayValue,
    fontWeight?: ResponsiveFontWeightValue,
    opacity?: ResponsiveOpacityValue,
    position?: ResponsivePositionValue,
    alignSelf?: ResponsiveAlignSelfValue,
    flexDirect?: ResponsiveFlexDirectionValue,
    flexBasis?: any,
    flexGrow?: any,
    flexWrap?: ResponsiveFlexWrapValue,
    justifyContent?: ResponsiveJustifyContentValue,
    alignContent?: ResponsiveAlignContentValue,
    alignItems?: ResponsiveAlignItemsValue,
    verticalAlign?: ResponsiveVerticleAlignValue,
    textAlign?: ResponsiveTextAlignValue,
    color?: ResponsiveColorValue,
    bg?: ResponsiveColorValue,
    width?: ResponsiveSpaceValue,
    height?: ResponsiveSpaceValue,
    '&:hover'?: any,
    top?: any,
    left?: any,
    right?: any,
    bottom?: any,
    transform?: any,
    pt?: ResponsiveSpaceValue,
    pl?: ResponsiveSpaceValue,
    pr?: ResponsiveSpaceValue,
    pb?: ResponsiveBoxShadowValue,
    p?: ResponsiveBoxShadowValue,
    mt?: ResponsiveSpaceValue,
    ml?: ResponsiveSpaceValue,
    mr?: ResponsiveSpaceValue,
    mb?: ResponsiveBoxShadowValue,
    m?: any,
    textTransform?: any,
    maxWidth?: any,
    maxHeight?: any,
    minWidth?: any,
    minHeight?: any,
    fontFamily?: any,
    lineHeight?: any,
    animation?: any,
}


interface BoxShadows {
    raised?: ResponsiveBoxShadowValue;
    floating?: ResponsiveBoxShadowValue;
}
