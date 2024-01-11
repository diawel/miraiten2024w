import { style } from '@vanilla-extract/css'
import { breakpoint, margin } from '../../../utils/constants'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: margin.block,
  width: '100%',
  padding: `${margin.block}px 0`,
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      padding: `${margin.section}px 0`,
    },
  },
})
