import { style, styleVariants } from '@vanilla-extract/css'
import {
  breakpoint,
  color,
  font,
  fontSize,
  margin,
} from '../../utils/constants'

export const container = style({
  position: 'fixed',
  bottom: 0,
  zIndex: 2000,
  width: '100%',
  height: 0,
  overflow: 'visible',
  '@media': {
    print: {
      display: 'none',
    },
  },
})

const backgroundBase = style({
  aspectRatio: '1',
  backgroundColor: color.yellow,
  border: `2px solid ${color.borderBlack}`,
  borderRadius: '50%',
  position: 'absolute',
  bottom: margin.siderail,
  right: margin.siderail,
  transform: 'translate(50%, 50%)',
  transition: 'width 0.6s',
})

export const background = styleVariants({
  open: [
    backgroundBase,
    {
      width: '300vmax',
    },
  ],
  closed: [
    backgroundBase,
    {
      width: 128,
    },
  ],
})

const contentContainerBase = style({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  bottom: 0,
  width: '100%',
  height: '100svh',
  transition: 'clip-path 0.6s',
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      padding: margin.section,
    },
  },
})

export const contentContainer = styleVariants({
  open: [
    contentContainerBase,
    {
      pointerEvents: 'auto',
      clipPath: 'circle(100%)',
    },
  ],
  closed: [
    contentContainerBase,
    {
      pointerEvents: 'none',
      clipPath: 'circle(0% at 100% 100%)',
    },
  ],
})

export const contentContainerInner = style({
  width: '100%',
  maxHeight: '100%',
  overscrollBehavior: 'contain',
  overflowY: 'auto',
  padding: `${margin.block}px ${margin.siderail}px`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: margin.section,
})

export const buttonContainer = style({
  position: 'absolute',
  bottom: margin.siderail,
  right: margin.siderail,
  width: 32,
  height: 24,
  padding: margin.paragraph,
})

export const clickable = style({
  display: 'contents',
  font: 'inherit',
  color: 'inherit',
  textAlign: 'inherit',
  appearance: 'none',
  cursor: 'pointer',
})

export const button = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  transition: 'opacity 0.3s 0.3s',
})

export const logo = style({
  height: 32,
  display: 'block',
})

export const link = style({
  fontFamily: font.head,
  fontSize: fontSize.subtitle,
  width: 'fit-content',
})

export const snsContainer = style({
  display: 'flex',
  gap: margin.siderail,
  padding: `${margin.block}px 0 0`,
  borderTop: `2px solid ${color.borderBlack}`,
  width: '100%',
})

export const snsIcon = style({
  width: 24,
  height: 24,
  objectFit: 'contain',
})
