import { style } from '@vanilla-extract/css'
import { margin } from '../../utils/constants'

export const container = style({
  display: 'flex',
  gap: margin.siderail,
  flexDirection: 'column',
  width: '100%',
  height: 'fit-content',
})

export const title = style({
  width: '100%',
  textAlign: 'center',
})
