import { style } from '@vanilla-extract/css'
import { breakpoint, margin } from '../../utils/constants'

export const container = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: `${margin.section}px ${margin.siderail}px`,
  gap: `${margin.section}px`,
})

export const titleSection = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: `${margin.paragraph}px`,
  textAlign: 'center',
})

export const flowSection = style({
  maxWidth: 640 - margin.siderail * 2,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: `${margin.block}px`,
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      maxWidth: 480 - margin.siderail * 2,
    },
  },
})
