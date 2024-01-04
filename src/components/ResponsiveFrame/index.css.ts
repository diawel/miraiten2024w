import { style } from '@vanilla-extract/css'
import { margin } from '../../utils/constants'

const breakpoint = 840

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: `0 ${margin.siderail}px`,
      height: '100vh',
    },
  },
})

export const section = style({
  display: 'flex',
  padding: `0 ${margin.siderail}px`,
  width: '100%',
  maxWidth: 640,
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      height: '100%',
      overflowY: 'auto',
      maxWidth: 440,
    },
  },
})
