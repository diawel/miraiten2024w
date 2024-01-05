import { style } from '@vanilla-extract/css'
import { color } from '../../utils/constants'

export const topBorder = style({
  borderTop: `1px solid ${color.borderBlack}`,
  height: 1,
  position: 'sticky',
  width: '100%',
  top: 0,
  zIndex: 1000,
})
