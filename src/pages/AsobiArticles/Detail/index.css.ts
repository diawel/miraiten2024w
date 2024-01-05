import { style } from '@vanilla-extract/css'
import { margin } from '../../../utils/constants'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: margin.section,
  width: '100%',
  padding: `${margin.section}px 0`,
})

export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
})
