import { globalStyle } from '@vanilla-extract/css'
import { font } from './utils/constants'

globalStyle('*', {
  fontFamily: font.body,
})

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontFamily: font.head,
})
