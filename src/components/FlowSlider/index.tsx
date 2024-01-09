import React, { useRef, useState } from 'react'
import StepCard from './StepCard'
import * as styles from './index.css'
import ArrowButton, { ArrowButtonDirection } from './ArrowButton'
import { margin } from '../../utils/constants'

export type FlowSliderProps = {
  children: React.ReactElement<typeof StepCard>[]
}

const FlowSlider: React.FC<FlowSliderProps> = ({ children }) => {
  const [showArrowButton, setShowArrowButton] = useState(false)
  const [arrowButtonPosition, setArrowButtonPosition] = useState({
    top: 0,
    left: 0,
  })
  const [arrowButtonDirection, setArrowButtonDirection] =
    useState<ArrowButtonDirection>('left')
  const scrollerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <button
      className={styles.clickable}
      onClick={() => {
        if (!showArrowButton) return
        const cardWidth = containerRef.current!.clientWidth - margin.siderail
        if (arrowButtonDirection === 'left') {
          scrollerRef.current?.scrollBy({
            left: -cardWidth,
            behavior: 'smooth',
          })
        } else {
          scrollerRef.current?.scrollBy({
            left: cardWidth,
            behavior: 'smooth',
          })
        }
      }}
    >
      <div
        className={styles.container}
        onMouseMove={(event) => {
          const containerRect = event.currentTarget.getBoundingClientRect()
          if (event.clientX < containerRect.left + containerRect.width / 2)
            setArrowButtonDirection('left')
          else setArrowButtonDirection('right')
          setArrowButtonPosition({
            top: event.clientY,
            left: event.clientX,
          })
        }}
        onMouseEnter={(event) => {
          if (!('ontouchstart' in window)) setShowArrowButton(true)
          setArrowButtonPosition({
            top: event.clientY,
            left: event.clientX,
          })
        }}
        onMouseLeave={() => {
          setShowArrowButton(false)
        }}
        style={{
          cursor: showArrowButton ? 'none' : 'default',
        }}
        ref={containerRef}
      >
        <div className={styles.slider} ref={scrollerRef}>
          {children.map((child, i) => (
            <div key={i} className={styles.cardContainer}>
              {child}
            </div>
          ))}
          <ArrowButton
            direction={arrowButtonDirection}
            position={arrowButtonPosition}
            isShown={showArrowButton}
          />
        </div>
      </div>
    </button>
  )
}

export default FlowSlider
