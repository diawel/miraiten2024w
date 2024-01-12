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

export const kvContainer = style({
  maxWidth: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
  transform: 'translateY(-16%)',
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

export const kvBackground = style({
  width: '168%',
  position: 'absolute',
  top: '-16%',
  left: '-30%',
  animation: `${fadeIn} 0.6s 1.8s backwards`,
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
  bottom: margin.siderail,
  width: '75%',
  maxWidth: 360,
  animation: `${slideIn} 0.6s 1.2s cubic-bezier(0, 0.6, 0.4, 1) backwards`,
  '@media': {
    [`screen and (min-width: ${breakpoint}px)`]: {
      maxWidth: 420,
      bottom: margin.block,
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
  right: 0,
  width: '14%',
  animation: `${dropIn} 0.6s 0.9s cubic-bezier(0, 0.6, 0.4, 1) backwards`,
})

const rotate = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(20deg)',
  },
})

export const exclamatoin = style({
  width: '100%',
  animation: `${rotate} 0.9s 1.2s steps(2, jump-both) backwards infinite`,
  transformOrigin: '32% 90%',
})
