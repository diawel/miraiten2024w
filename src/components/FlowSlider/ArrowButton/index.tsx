import * as styles from './index.css'
import arrowButton from '../../../assets/ArrowButton.svg'
import { useEffect, useRef, useState } from 'react'

export type ArrowButtonDirection = 'left' | 'right'

export type ArrowButtonProps = {
  direction: ArrowButtonDirection
  position: {
    top: number
    left: number
  }
  isShown: boolean
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  position,
  isShown,
}) => {
  const [currentPosition, setCurrentPosition] = useState(position)
  const animationRef = useRef(0)
  useEffect(() => {
    const animationFrame = () => {
      const modifiedPosition = { ...currentPosition }
      modifiedPosition.top += (position.top - currentPosition.top) / 8
      modifiedPosition.left += (position.left - currentPosition.left) / 8
      setCurrentPosition(modifiedPosition)

      animationRef.current = requestAnimationFrame(animationFrame)
    }
    animationRef.current = requestAnimationFrame(animationFrame)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [currentPosition, position])
  return (
    <img
      className={styles.button}
      src={arrowButton}
      style={{
        transform:
          direction === 'left'
            ? 'translate(-50%, -50%) rotate(-180deg)'
            : 'translate(-50%, -50%)',
        top: currentPosition.top,
        left: currentPosition.left,
        opacity: isShown ? 1 : 0,
      }}
    />
  )
}

export default ArrowButton
