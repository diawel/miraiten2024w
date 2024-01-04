import { style } from '@vanilla-extract/css'
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

export const paragraph = style({
  display: 'flex',
  flexDirection: 'column',
  gap: margin.paragraph,
  width: '100%',
  textAlign: 'justify',
})
