import { style } from '@vanilla-extract/css'
import { breakpoint } from '../../utils/constants'

export const container = style({
  display: 'none',
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      display: 'contents',
    },
  },
})
