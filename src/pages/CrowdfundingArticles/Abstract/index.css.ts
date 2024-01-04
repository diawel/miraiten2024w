import { style } from '@vanilla-extract/css'
import { margin } from '../../../utils/constants'

export const container = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: `${margin.section}px 0`,
})

export const title = style({
  width: '100%',
  textAlign: 'center',
})
