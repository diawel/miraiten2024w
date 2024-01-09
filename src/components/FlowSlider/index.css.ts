import { style } from '@vanilla-extract/css'
import { margin } from '../../utils/constants'

export const container = style({
  position: 'relative',
  width: '100%',
})

export const clickable = style({
  display: 'contents',
  font: 'inherit',
  color: 'inherit',
  textAlign: 'inherit',
  appearance: 'none',
})

export const slider = style({
  position: 'relative',
  display: 'flex',
  gap: margin.siderail,
  margin: '0 -50vw',
  padding: '0 50vw',
  width: `calc(100% - ${margin.siderail * 2}px)`,
  left: margin.siderail,
  boxSizing: 'content-box',
  overflowX: 'auto',
  scrollSnapType: 'x mandatory',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
})

export const cardContainer = style({
  width: '100%',
  scrollSnapAlign: 'center',
  flexShrink: 0,
})
