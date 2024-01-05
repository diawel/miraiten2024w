import { style } from '@vanilla-extract/css'
import { breakpoint, color, margin } from '../../utils/constants'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
  },
})

export const abstractSection = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  backgroundImage: 'url(/assets/grid.png)',
  backgroundSize: 20,
  position: 'sticky',
  top: 0,
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      width: '40%',
      height: '100vh',
    },
  },
})

export const abstractSectionInner = style({
  width: '100%',
  padding: `0 ${margin.siderail}px`,
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      maxWidth: 480,
    },
  },
})

export const detailSection = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: color.primaryWhite,
  position: 'relative',
  borderTop: `1px solid ${color.borderBlack}`,
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      width: '60%',
      borderTop: 'none',
    },
  },
})

export const detailSectionInner = style({
  width: '100%',
  padding: `0 ${margin.siderail}px`,
  maxWidth: 640,
})
