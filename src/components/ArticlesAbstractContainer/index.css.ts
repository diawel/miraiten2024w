import { style } from '@vanilla-extract/css'
import { margin } from '../../utils/constants'

export const container = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: `${margin.section}px 0`,
  gap: `${margin.section}px`,
})

export const titleSection = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: `${margin.paragraph}px`,
  textAlign: 'center',
})

export const flowSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: `${margin.block}px`,
})
