import { keyframes, style } from '@vanilla-extract/css'
import { margin } from '../../utils/constants'

export const slideIn = keyframes({
  '0%': { opacity: 0, transform: 'translateY(24px)' },
  '50%': { opacity: 0.8 },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: margin.section,
  padding: `${margin.section}px 0`,
  width: '100%',
  height: 'fit-content',
  animation: `${slideIn} 0.9s cubic-bezier(0, 0.6, 0.4, 1)`,
})

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: margin.siderail,
})

export const slide = style({
  width: '100%',
  aspectRatio: '16 / 9',
  border: 'none',
})

export const body = style({})

export const posterContainer = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
})

export const poster = style({
  maxWidth: '100%',
  width: 'auto',
  maxHeight: `calc(100vh - ${margin.siderail * 2}px)`,
})

export const webCapture = style({
  width: '100%',
})

export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
})
