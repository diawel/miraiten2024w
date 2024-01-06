import { style } from '@vanilla-extract/css'
import { breakpoint, color, margin } from '../../utils/constants'

export const container = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: margin.block,
  backgroundColor: color.yellow,
  borderTop: `2px solid ${color.borderBlack}`,
  padding: `${margin.section}px ${margin.siderail}px`,
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      flexDirection: 'row',
      gap: margin.section,
      padding: `${margin.section}px`,
    },
  },
})

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: margin.paragraph,
})

export const logo = style({
  height: 20,
})
