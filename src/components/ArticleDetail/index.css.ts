import { style } from '@vanilla-extract/css'
import { breakpoint, margin } from '../../utils/constants'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: margin.section,
  padding: `${margin.siderail}px 0 ${margin.section}px`,
  width: '100%',
  height: 'fit-content',
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      padding: `${margin.section}px 0`,
    },
  },
})

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: margin.siderail,
})

export const slide = style({
  width: '100%',
  aspectRatio: '16 / 9',
  border: 'none',
})

export const body = style({})

export const posterContainer = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
})

export const poster = style({
  maxWidth: '100%',
  width: 'auto',
  maxHeight: `calc(100vh - ${margin.siderail * 2}px)`,
})

export const webCapture = style({
  width: '100%',
})
