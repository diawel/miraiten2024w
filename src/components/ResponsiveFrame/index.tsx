import { useEffect, useRef, useState } from 'react'
import * as styles from './index.css'

export type ResponsiveFrameProps = {
  abstractSection?: React.ReactNode
  detailSection?: React.ReactNode
}

const ResponsiveFrame: React.FC<ResponsiveFrameProps> = ({
  abstractSection,
  detailSection,
}) => {
  const abstractSectionRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)
  const [abstractSectionTop, setAbstractSectionTop] = useState<number>(0)
  useEffect(() => {
    const animationFrame = () => {
      setAbstractSectionTop(
        Math.min(
          document.documentElement.clientHeight -
            (abstractSectionRef.current?.clientHeight || 0),
          0
        )
      )
      animationRef.current = requestAnimationFrame(animationFrame)
    }
    animationRef.current = requestAnimationFrame(animationFrame)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <div className={styles.container}>
      <div
        className={styles.abstractSection}
        ref={abstractSectionRef}
        style={{ top: abstractSectionTop }}
      >
        <div className={styles.abstractSectionInner}>
          <div className={styles.abstractSectionInnerInner}>
            {abstractSection}
          </div>
        </div>
      </div>
      <div className={styles.detailSection}>
        <div className={styles.detailSectionInner}>{detailSection}</div>
      </div>
    </div>
  )
}

export default ResponsiveFrame
