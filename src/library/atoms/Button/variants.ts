const standard = {
    color: 'action',
    borderColor: 'action',
    fontSize: 2,
    borderRadius: 1,
    pl: 3,
    pr: 3,
    pt: 2,
    pb: 2,

    cursor: 'pointer',

    '&:hover': {
        opacity: '0.8',
    },

    '&:focus': {
        outline: 'none',
    },
};
const primary = {
    ...standard,
    color: 'white',
    border: 0,
    bg: 'action',
}

const subtle = {
    ...standard,
    border: 0,
}

const toggled = {
    ...standard,
    border: 0,
    bg: 'background',
}

const warning = {
    ...standard,
    borderColor: 'error',
    color: 'error',
}

export type ButtonVariant = 
    'standard' |
    'primary' |
    'subtle' |
    'toggled' |
    'warning'

export const variants = {
    standard,
    primary,
    subtle,
    toggled,
    warning
}
