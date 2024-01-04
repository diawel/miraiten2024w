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
      alignItems: 'flex-start',
      padding: `0 ${margin.siderail}px`,
    },
  },
})

export const abstractSection = style({
  display: 'flex',
  width: '100%',
  maxWidth: 640,
  padding: `0 ${margin.siderail}px`,
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      padding: `0 ${margin.siderail * 2}px`,
      width: 400,
      height: '100vh',
      flexShrink: 0,
    },
  },
})

export const detailSection = style({
  display: 'flex',
  padding: `0 ${margin.siderail}px`,
  width: '100%',
  maxWidth: 640,
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      maxWidth: 560,
    },
  },
})
