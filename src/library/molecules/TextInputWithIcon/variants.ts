import { Theme } from "../../theme/types";

const leftInput: Partial<Theme> = {
    pl: 8,
}

const rightInput: Partial<Theme> = {
    pr: 12,
}

const rightIcon: Partial<Theme> = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    right: 16,
    color: 'primary',
}

const leftIcon: Partial<Theme> = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '50%',
    left: 16,
    transform: 'translate(-50%, -50%)',
    color: 'primary',
}

export const iconVariants = {
    left: leftIcon,
    right: rightIcon,
}

export const iconTextVariants = {
    left: leftInput,
    right: rightInput,
}
