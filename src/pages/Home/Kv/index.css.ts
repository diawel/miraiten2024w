import { keyframes, style } from '@vanilla-extract/css'

const bounceIn = keyframes({
  '0%': {
    opacity: 0,
    transform: 'scale3d(0.3, 0.3, 0.3)',
  },
  '40%': {
    opacity: 1,
    transform: 'scale3d(1.1, 1.1, 1.1)',
  },
  '100%': {
    transform: 'scale3d(1, 1, 1)',
  },
})

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
  animation: `${bounceIn} 0.7s 0.3s backwards`,
})
