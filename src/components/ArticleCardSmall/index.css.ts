import { style } from '@vanilla-extract/css'
import { color, fontSize, margin } from '../../utils/constants'

export const container = style({
  display: 'flex',
  gap: margin.paragraph,
  width: '100%',
  height: 72,
})

export const thumbnail = style({
  height: '100%',
  aspectRatio: '16 / 9',
  objectFit: 'cover',
  boxShadow: `0px 24px 64px 0px ${color.shadow}`,
  borderRadius: 4,
})

export const descriptionContainer = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

export const description = style({
  fontSize: fontSize.ui,
  overflow: 'hidden',
  display: '-webkit-box',
  textOverflow: 'ellipsis',
  lineClamp: '2',
})
