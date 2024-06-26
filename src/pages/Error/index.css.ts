import { style } from '@vanilla-extract/css'
import { gridBackground, margin } from '../../utils/constants'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  minHeight: '100svh',
  width: '100%',
  padding: margin.siderail,
  ...gridBackground,
})
