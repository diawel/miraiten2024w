import { style } from '@vanilla-extract/css'

export const container = style({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const kv = style({
  width: '100%',
  maxWidth: 320,
})
