import { style } from '@vanilla-extract/css'
import { gridBackground } from '../../utils/constants'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  minHeight: '100svh',
  width: '100%',
  ...gridBackground,
})

export const logo = style({
  height: 20,
})