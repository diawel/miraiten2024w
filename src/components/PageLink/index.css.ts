import { style } from '@vanilla-extract/css'

export const link = style({
  color: 'inherit',
  textDecoration: 'underline',
  ':hover': {
    textDecoration: 'none',
  },
})
