import { style } from '@vanilla-extract/css'
import { margin } from '../../../utils/constants'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: margin.section,
  padding: `${margin.block}px 0 ${margin.section}px`,
  width: '100%',
  height: 'fit-content',
})

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: margin.block,
})

export const title = style({})

export const description = style({
  textAlign: 'justify',
})

export const slide = style({
  width: '100%',
  aspectRatio: '16 / 9',
  border: 'none',
})

export const body = style({
  textAlign: 'justify',
})

export const poster = style({
  width: '100%',
  aspectRatio: '1',
  objectFit: 'contain',
})
