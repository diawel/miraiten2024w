import { style } from '@vanilla-extract/css'
import { color, margin } from '../../utils/constants'

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

export const slide = style({
  width: '100%',
  aspectRatio: '16 / 9',
  border: 'none',
  boxShadow: `0px 24px 64px 0px ${color.shadow}`,
  borderRadius: 4,
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
  boxShadow: `0px 24px 64px 0px ${color.shadow}`,
  borderRadius: 4,
})

export const webCapture = style({
  width: '100%',
  boxShadow: `0px 24px 64px 0px ${color.shadow}`,
  borderRadius: 4,
})
