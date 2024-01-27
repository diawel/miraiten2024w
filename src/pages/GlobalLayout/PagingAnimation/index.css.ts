import { style, styleVariants } from '@vanilla-extract/css'
import { color } from '../../../utils/constants'

const overlayBase = style({
  position: 'fixed',
  top: 0,
  zIndex: 2000,
  width: '100%',
  height: '100dvh',
  backgroundColor: color.primaryWhite,
  border: `solid ${color.borderBlack}`,
  borderWidth: '2px 0',
  opacity: 0,
  pointerEvents: 'none',
  transition: 'opacity 0.3s',
})

export const overlay = styleVariants({
  open: [
    overlayBase,
    style({
      opacity: 1,
      transitionTimingFunction: 'ease-in',
    }),
  ],
  closed: [
    overlayBase,
    style({
      opacity: 0,
      transitionTimingFunction: 'ease-out',
    }),
  ],
})
