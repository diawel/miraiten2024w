import { keyframes, style } from '@vanilla-extract/css'
import { margin } from '../../../utils/constants'

export const container = style({
  padding: `${margin.section}px 0`,
  display: 'flex',
  flexDirection: 'column',
  gap: margin.section,
  width: '100%',
  height: 'fit-content',
})

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: margin.siderail,
  width: '100%',
})

export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  padding: `${margin.paragraph}px 0 ${margin.siderail}px`,
})

export const image = style({
  width: '100%',
})

export const map = style({
  width: '100%',
  aspectRatio: '1',
  border: 'none',
})

export const anchor = style({
  textDecoration: 'underline',
  color: 'inherit',
  ':hover': {
    textDecoration: 'none',
  },
})

export const showBlock = keyframes({
  from: { opacity: 0, transform: 'translateY(24px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
})
