import styled, { StyledComponentClass } from 'styled-components'
import { border, borderColor, BorderColorProps, BorderProps, borderRadius, BorderRadiusProps, color, ColorProps, fontSize, FontSizeProps, space, SpaceProps, width, WidthProps } from 'styled-system'

// Add styled-system functions to your component
export const Div = styled('div')<SpaceProps & ColorProps & WidthProps & FontSizeProps & BorderProps>`
  ${color}
  ${space}
  ${fontSize}
  ${width}
  ${border}
`

export const Box = styled('div')<SpaceProps & ColorProps & WidthProps & FontSizeProps>`
  ${color}
  ${space}
  ${width}
`

export type Hi = SpaceProps & ColorProps & WidthProps & FontSizeProps & BorderProps & BorderRadiusProps & BorderColorProps

export type RawInputInterface = StyledComponentClass<{}, any, BaseT & Hi>
export type BaseT = React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>;
export type BaseA = Hi & BaseT;

export type BaseY = StyledComponentClass<Hi, any, React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> & SpaceProps & ColorProps & WidthProps & FontSizeProps & BorderProps & BorderRadiusProps & BorderColorProps>
export type BaseZ = React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> & SpaceProps & ColorProps & WidthProps & FontSizeProps & BorderProps & BorderRadiusProps & BorderColorProps

export const TextInput2: BaseY = styled('input')<Hi>`
  box-sizing: border-box;
  ${color}
  ${space}
  ${width}
  ${border}
  ${borderRadius}

  &:hover {
    ${borderColor}
  }
}
`

export const TextInput = styled('input')<ColorProps>`
  box-sizing: border-box;

  &:hover {
    ${borderColor}
  }

`