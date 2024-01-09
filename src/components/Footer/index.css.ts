import { style } from '@vanilla-extract/css'
import { breakpoint, color, fontSize, margin } from '../../utils/constants'

export const container = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: margin.block,
  backgroundColor: color.yellow,
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
  fontSize: fontSize.ui,
  gap: margin.paragraph,
})

export const logo = style({
  height: 20,
})

export const listTitle = style({
  fontSize: fontSize.ui,
})
