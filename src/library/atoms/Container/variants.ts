export type ContainerVariant =
    'simple' |
    'centered' |
    'verticalCentered' |
    'horizontalCentered' |
    'background'

const simple = {
    display: 'flex',
    p: 2,
}

const centered = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const verticalCentered = {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
}

const horizontalCentered = {
    display: 'flex',
    alignItems: 'stretch',
}

const background = {
    bg: 'background',
    pb: 5,
}

export const variants = {
    simple,
    centered,
    verticalCentered,
    background,
    horizontalCentered,
}