import { style } from '@vanilla-extract/css'
import {
  breakpoint,
  color,
  gridBackground,
  margin,
} from '../../utils/constants'

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
  position: 'sticky',
  overflow: 'hidden',
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      width: '40%',
      height: 'calc(100vh - 4px)',
      overflowY: 'auto',
    },
  },
})

export const abstractSectionInner = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  ...gridBackground,
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      height: 'fit-content',
      minHeight: 'calc(100vh - 4px)',
      alignItems: 'center',
    },
  },
})

export const detailSection = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: color.primaryWhite,
  position: 'relative',
  borderTop: `2px solid ${color.borderBlack}`,
  transform: 'translateZ(0)',
  overflow: 'hidden',
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      width: '60%',
      minHeight: '100vh',
      borderTop: 'none',
    },
  },
})

export const detailSectionInner = style({
  width: '100%',
  padding: `0 ${margin.siderail}px`,
  maxWidth: 640,
})
