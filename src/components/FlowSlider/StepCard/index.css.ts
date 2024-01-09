import { style } from '@vanilla-extract/css'
import { color, font, fontSize, margin } from '../../../utils/constants'

const shadowShift = 6

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: margin.paragraph,
  width: '100%',
  height: '100%',
  marginBottom: shadowShift,
})

export const image = style({
  width: '100%',
  aspectRatio: '3 / 2',
  borderRadius: 4,
  boxShadow: `${shadowShift}px ${shadowShift}px 0px ${color.solidShadow}`,
})

export const description = style({
  position: 'relative',
  width: '100%',
  flexGrow: '1',
  fontSize: fontSize.ui,
  ':before': {
    content: '""',
    position: 'absolute',
    top: 6,
    left: 6,
    width: '100%',
    height: `calc(100% - ${shadowShift}px)`,
    background: color.yellow,
  },
})

export const descriptionInner = style({
  position: 'relative',
  display: 'flex',
  width: '100%',
  height: `calc(100% - ${shadowShift}px)`,
  padding: margin.paragraph,
  paddingLeft: margin.paragraph + shadowShift,
  gap: margin.paragraph,
  border: `2px solid ${color.borderBlack}`,
})

export const number = style({
  flexShrink: 0,
  fontFamily: font.head,
})

export const text = style({
  fontFamily: font.head,
})
