import { style } from '@vanilla-extract/css'

export const button = style({
  pointerEvents: 'none',
  position: 'absolute',
  transition: 'opacity 0.3s, transform 0.3s',
})
