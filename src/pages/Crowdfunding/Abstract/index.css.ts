import { style } from '@vanilla-extract/css'
import { margin } from '../../../utils/constants'

export const container = style({
  width: `calc(100% + ${margin.siderail * 2}px)`,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: `0 -${margin.siderail}px`,
})

export const thumbnail = style({
  width: '100%',
  aspectRatio: '16 / 9',
  objectFit: 'cover',
})

export const mainVideo = style({
  width: '100%',
  aspectRatio: '16 / 9',
  border: 'none',
})
