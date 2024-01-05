import { style } from '@vanilla-extract/css'
import { margin } from '../../utils/constants'

export const container = style({
  textAlign: 'justify',
  display: 'flex',
  flexDirection: 'column',
  gap: margin.paragraph,
})
