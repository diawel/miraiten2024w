import { style } from '@vanilla-extract/css'
import { color, margin } from '../../utils/constants'

export const container = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  height: 128,
  width: '100%',
  padding: margin.siderail,
  backgroundColor: color.yellow,
})

export const logo = style({
  height: 16,
})
