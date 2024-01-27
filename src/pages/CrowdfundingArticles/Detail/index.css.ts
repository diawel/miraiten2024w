import { keyframes, style } from '@vanilla-extract/css'
import { breakpoint, margin } from '../../../utils/constants'

const slideIn = keyframes({
  '0%': { opacity: 0, transform: 'translateY(24px)' },
  '50%': { opacity: 0.8 },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: margin.block,
  width: '100%',
  padding: `${margin.block}px 0`,
  animation: `${slideIn} 0.9s cubic-bezier(0, 0.6, 0.4, 1)`,
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      padding: `${margin.section}px 0`,
    },
  },
})
