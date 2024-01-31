import { style, styleVariants } from '@vanilla-extract/css'
import { color, font, margin } from '../../../utils/constants'

export const container = style({
  display: 'flex',
  gap: margin.paragraph,
})

const typeBase = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  fontFamily: font.head,
})

export const type = styleVariants({
  enabled: [
    typeBase,
    { color: color.primaryBlack, stroke: color.primaryBlack },
  ],
  disabled: [typeBase, { color: color.solidShadow, stroke: color.solidShadow }],
})
