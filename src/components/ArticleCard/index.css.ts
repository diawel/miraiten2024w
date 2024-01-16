import { keyframes, style } from '@vanilla-extract/css'
import { color, margin } from '../../utils/constants'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: margin.paragraph,
  width: '100%',
})

export const thumbnail = style({
  width: '100%',
  aspectRatio: '16 / 9',
  objectFit: 'cover',
  boxShadow: `0px 24px 64px 0px ${color.shadow}`,
  borderRadius: 4,
})

export const showBlock = keyframes({
  from: { opacity: 0, transform: 'scale(1.05)' },
  to: { opacity: 1, transform: 'scale(1)' },
})
