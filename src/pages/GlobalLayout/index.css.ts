import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { color, font, fontSize } from '../../utils/constants'

globalStyle('*', {
  fontFamily: font.body,
})

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontFamily: font.head,
  fontSize: fontSize.body,
})

globalStyle('h1', {
  fontSize: fontSize.title,
})

globalStyle('h2', {
  fontSize: fontSize.subtitle,
})

globalStyle('h3', {
  fontSize: fontSize.minititle,
})

globalStyle('body', {
  backgroundColor: color.yellow,
})

const frameBorderBase = style({
  borderTop: `2px solid ${color.borderBlack}`,
  height: 1,
  position: 'sticky',
  width: '100%',
  zIndex: 1000,
})

export const frameBorder = styleVariants({
  top: [
    frameBorderBase,
    {
      top: 0,
    },
  ],
  bottom: [
    frameBorderBase,
    {
      bottom: 0,
    },
  ],
})
