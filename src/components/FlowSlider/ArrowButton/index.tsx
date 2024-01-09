import * as styles from './index.css'
import arrowButton from '../../../assets/ArrowButton.svg'

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
  return (
    <img
      className={styles.button}
      src={arrowButton}
      style={{
        transform:
          direction === 'left'
            ? 'translate(-50%, -50%) rotate(-180deg)'
            : 'translate(-50%, -50%)',
        top: position.top,
        left: position.left,
        opacity: isShown ? 1 : 0,
      }}
    />
  )
}

export default ArrowButton
