import { useEffect, useRef, useState } from 'react'
import * as styles from './index.css'

export type ThumbnailsProps = {
  thumbnails: string[]
}

const Thumbnails: React.FC<ThumbnailsProps> = ({ thumbnails }) => {
  const innerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef(0)
  const [repeatDuration, setRepeatDuration] = useState(0)
  useEffect(() => {
    const animationFrame = () => {
      animationRef.current = requestAnimationFrame(animationFrame)
      const inner = innerRef.current
      if (!inner) return
      setRepeatDuration(inner.clientWidth * 48)
    }
    animationRef.current = requestAnimationFrame(animationFrame)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])
  return (
    <div className={styles.container}>
      <div
        className={styles.inner}
        ref={innerRef}
        style={{ animationDuration: `${repeatDuration}ms` }}
      >
        {thumbnails.map((thumbnail) => (
          <img key={thumbnail} className={styles.thumbnail} src={thumbnail} />
        ))}
        {thumbnails.map((thumbnail) => (
          <img key={thumbnail} className={styles.thumbnail} src={thumbnail} />
        ))}
      </div>
    </div>
  )
}

export default Thumbnails
