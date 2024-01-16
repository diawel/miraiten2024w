import { keyframes, style } from '@vanilla-extract/css'
import { breakpoint } from '../../../../utils/constants'

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
})

const slide = keyframes({
  from: { transform: 'translateX(25%)' },
  to: { transform: 'translateX(-25%)' },
})

export const inner = style({
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  height: 92,
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      height: 128,
    },
  },
  animation: `${slide} linear infinite`,
})

export const thumbnail = style({
  height: '100%',
})
