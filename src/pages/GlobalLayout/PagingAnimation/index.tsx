import { useLocation, useNavigate } from 'react-router-dom'
import * as styles from './index.css'
import { useEffect } from 'react'

export type PagingAnimationProps = {
  animateTo: string | null
  setAnimateTo: (path: string | null) => void
}

const PagingAnimation: React.FC<PagingAnimationProps> = ({
  animateTo,
  setAnimateTo,
}) => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!animateTo) return
    if (location.pathname == animateTo) setAnimateTo(null)
    else
      setTimeout(() => {
        navigate(animateTo)
      }, 300)
  }, [animateTo, location.pathname, navigate, setAnimateTo])

  return (
    <div className={animateTo ? styles.overlay.open : styles.overlay.closed} />
  )
}

export default PagingAnimation
