import { keyframes, style } from '@vanilla-extract/css'
import { breakpoint, margin } from '../../../utils/constants'

export const container = style({
  position: 'relative',
  width: '100%',
  height: 'calc(100svh - 4px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `0 ${margin.siderail}px`,
})

const zoomIn = keyframes({
  from: {
    transform: 'scale(0.8)',
  },
  to: {
    transform: 'scale(1)',
  },
})

export const kvContainer = style({
  maxWidth: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  animation: `${zoomIn} 0.6s cubic-bezier(0, 0.6, 0.4, 1) backwards`,
})

const slideUp = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-16%)',
  },
})

export const kvContainerInner = style({
  position: 'relative',
  height: 'fit-content',
  width: '100%',
  maxHeight: '60%',
  maxWidth: 630,
  aspectRatio: '4 / 5',
  display: 'flex',
  flexDirection: 'column',
  animation: `${slideUp} 0.9s 1.8s cubic-bezier(0, 0.6, 0.4, 1) forwards`,
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      maxWidth: 480,
    },
  },
})

export const kv = style({
  width: '100%',
  maxHeight: '100%',
})

const clipIn = keyframes({
  from: {
    clipPath: 'circle(0%)',
  },
  to: {
    clipPath: 'circle(100%)',
  },
})

export const coleredKv = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  maxHeight: '100%',
  animation: `${clipIn} 1.2s cubic-bezier(0.6, 0, 0.4, 1)`,
})

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

export const kvBackgroundContainer = style({
  width: '168%',
  position: 'absolute',
  top: '-16%',
  left: '-30%',
  animation: `${fadeIn} 0.6s 0.6s backwards`,
})

const slideDown = keyframes({
  from: {
    transform: 'translateY(-8%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

export const kvBackground = style({
  width: '100%',
  animation: `${slideDown} 0.9s 1.8s cubic-bezier(0, 0.6, 0.4, 1) backwards`,
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(-4%)',
    opacity: 0,
  },
  to: {
    transform: 'translateX(0)',
    opacity: 1,
  },
})

export const textBlock = style({
  position: 'absolute',
  left: 0,
  bottom: margin.block,
  width: '80%',
  maxWidth: 400,
  animation: `${slideIn} 0.6s 2.1s cubic-bezier(0, 0.6, 0.4, 1) backwards`,
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      maxWidth: 420,
      bottom: margin.section,
    },
  },
})

const dropIn = keyframes({
  from: {
    transform: 'translateY(-4%)',
    opacity: 0,
  },
  to: {
    transform: 'translateY(0)',
    opacity: 1,
  },
})

export const exclamatoinContainer = style({
  position: 'absolute',
  bottom: '-3%',
  right: '4%',
  width: '14%',
  animation: `${dropIn} 0.3s 1.2s cubic-bezier(0, 0.6, 0.4, 1) backwards`,
})

const rotate = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(10deg)',
  },
})

export const exclamatoin = style({
  width: '100%',
  animation: `${rotate} 0.3s 1.2s steps(1, end) both`,
  transformOrigin: '32% 90%',
})

export const scroll = style({
  position: 'absolute',
  bottom: 108,
  right: margin.siderail,
  transform: 'translateX(50%)',
  animation: `${fadeIn} 0.6s 2.7s backwards`,
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      bottom: margin.block,
    },
  },
})
