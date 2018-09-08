import * as allStyles from 'styled-system';


export const customMixed = (styles: any) => {
    // window.console.log('mixing')
    Object.keys(styles).forEach((s: any) => {
        if(s !== 'theme' && typeof styles[s] === 'object' && Object.keys(styles[s]).length > 0) {
            styles[s] = customMixed({ theme: styles.theme, ...styles[s]});
        }
    })
    const myMixed = allStyles.mixed(styles)
    return myMixed;
}

// export const customMixed2 = (theme, variation, styling) => {
//     // window.console.log('mixing')
// }

// export const customMixed = (styles: any) => {
//     for (const key in styles) {
//         if (key !== 'theme' && key !== null && typeof key === 'object') {
//             styles[key].theme = styles.theme;
//             styles[key] = customMixed(styles[key])
//         }
//     }

//     return mixed(styles)
// }


// function customMix(theme: any, s: any) {
//     // window.console.log('hi')
//     // tslint:disable-next-line:forin
//     // tslint:disable-next-line:forin
//     for (const k in s) {
//         const valueId = mapValue(k);
//         s[(elementMap[k] || k)] = theme[valueId] ? theme[mapValue(valueId)][s[k]] || convertToPixel(s[k]) : convertToPixel(s[k]);
//         // s[matchCssId(k)] = matchValue(k, s[k], theme)
//     }

//     // tslint:disable-next-line:no-string-literal
//     // res['width'] = '400px';
//     // tslint:disable-next-line:no-string-literal
//     // res['height'] = '400px';
//     return s;
// }


// const elementMap = {
//     'bg': { id: 'backgroundColor', themeId: 'colors' },
//     'p':  { id: 'padding', mod: convertToPixel },
//     'pl': { id: 'padding-left', mod: convertToPixel },
//     'pr': { id: 'padding-right', mod: convertToPixel },
// }

// const valueMap = {
//     'bg': 'colors',
// }

// function matchCssId(id: string) {
//     return elementMap[id] || id;
// }

// function mapValue(id: string) {
//     return valueMap[id] || id;
// }

// function matchValue(id: string, v: string, theme: any) {
//     const valueId = mapValue(id)
//     return theme[valueId] ? theme[mapValue(valueId)][v] || convertToPixel(v) : convertToPixel(v);
// }

// function convertToPixel(x: any) {
//     return Number.isInteger(x) ? `${x}px` : x;
// }

// const cache = {};

export const mergeStyles = (props: any, debug = false) => {
    if(!props.styling && !props.variation) { return null; }

    const variationStyles = props.variation ? props.variation : {};
    return customMixed({ theme: props.theme, ...variationStyles, ...props.styling })
}