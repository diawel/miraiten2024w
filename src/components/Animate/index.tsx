import { useEffect, useRef, useState } from 'react'
export type AnimateProps = {
  children: React.ReactNode
  animation: string
}

const Animate: React.FC<AnimateProps> = ({ children, animation }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef(0)
  const [inDisplay, setInDisplay] = useState<boolean>(false)
  useEffect(() => {
    const animationFrame = () => {
      const container = containerRef.current
      if (!container) return
      const rect = container.getBoundingClientRect()
      setInDisplay(rect.top < document.documentElement.clientHeight * 0.8)
      animationRef.current = requestAnimationFrame(animationFrame)
    }
    animationRef.current = requestAnimationFrame(animationFrame)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])
  return (
    <div
      ref={containerRef}
      style={{
        animation,
        animationPlayState: inDisplay ? 'running' : 'paused',
      }}
    >
      {children}
    </div>
  )
}

export default Animate
