import { useEffect, useRef, useState } from 'react'
export type AnimateProps = {
  children: React.ReactNode
  animation: string
}

const Animate: React.FC<AnimateProps> = ({ children, animation }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef(0)
  const [hasDisplayed, setHasDisplayed] = useState<boolean>(false)
  useEffect(() => {
    if (hasDisplayed) return
    const animationFrame = () => {
      const container = containerRef.current
      if (!container) return
      const rect = container.getBoundingClientRect()
      setHasDisplayed(rect.top < document.documentElement.clientHeight * 0.8)
      animationRef.current = requestAnimationFrame(animationFrame)
    }
    animationRef.current = requestAnimationFrame(animationFrame)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [hasDisplayed])
  return (
    <div
      ref={containerRef}
      style={{
        animation,
        animationPlayState: hasDisplayed ? 'running' : 'paused',
      }}
    >
      {children}
    </div>
  )
}

export default Animate
