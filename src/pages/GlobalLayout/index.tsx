import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../../components/Footer'
import * as styles from './index.css'
import Menu from '../../components/Menu'
import { createContext, useState } from 'react'
import PagingAnimation from './PagingAnimation'

export const PagingAnimationContext = createContext<
  (animateTo: string | null) => void
>(() => {})

const GlobalLayout: React.FC = () => {
  const [animateTo, setAnimateTo] = useState<string | null>(null)
  return (
    <PagingAnimationContext.Provider value={setAnimateTo}>
      <div className={styles.frameBorder.top} />
      <div className={styles.content}>
        <Outlet />
      </div>
      <div className={styles.frameBorder.bottom} />
      <Footer />
      <PagingAnimation {...{ animateTo, setAnimateTo }} />
      <Menu />
      <ScrollRestoration />
    </PagingAnimationContext.Provider>
  )
}

export default GlobalLayout
