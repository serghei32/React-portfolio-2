import {theme} from "./Theme";

type FontPropsType = {
  family?: string
  weigth?: number
  color?: string
  lineHeight?: number
  Fmin?: number
  Fmax?: number
}


export const font = ({family, weigth, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
line-height:${lineHeight || 1.2};
font-weight:${weigth || 400};
color:${color || theme.colors.font};
font-family: ${family || "Poppins"};
font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px );
`


