import { style, styleVariants } from '@vanilla-extract/css'
import { breakpoint, color, margin } from '../../utils/constants'

export const container = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: margin.block,
  justifyContent: 'center',
})

const mainVisualBase = style({
  width: `calc(100% + ${margin.siderail * 2}px)`,
  margin: `0 -${margin.siderail}px`,
  aspectRatio: '16 / 9',
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      boxShadow: `0px 24px 64px 0px ${color.shadow}`,
      borderRadius: 4,
      width: '100%',
      margin: 0,
    },
  },
})

export const mainVisual = styleVariants({
  thumbnail: [mainVisualBase, { objectFit: 'cover' }],
  video: [mainVisualBase, { border: 'none' }],
})
