import * as styles from './index.css'
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'
import { useEffect, useState } from 'react'
import logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import instagram from '../../assets/instagram.svg'
import x from '../../assets/x.svg'
import PageLink from '../PageLink'

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [open])

  return (
    <div className={styles.container}>
      <div
        className={open ? styles.background.open : styles.background.closed}
      />
      <div
        className={
          open ? styles.contentContainer.open : styles.contentContainer.closed
        }
      >
        <div className={styles.contentContainerInner}>
          <button
            className={styles.clickable}
            onClick={() => {
              setOpen(false)
              navigate('/')
            }}
          >
            <img src={logo} alt="logo" className={styles.logo} />
          </button>
          <button
            className={styles.clickable}
            onClick={() => {
              setOpen(false)
              navigate('/asobi')
            }}
          >
            <div className={styles.link}>新しい遊びの提案</div>
          </button>
          <button
            className={styles.clickable}
            onClick={() => {
              setOpen(false)
              navigate('crowdfunding')
            }}
          >
            <div className={styles.link}>
              人に寄り添うサービス・アイテムの提案
            </div>
          </button>
          <div className={styles.snsContainer}>
            <PageLink href="https://www.instagram.com/miraiten2024" newTab>
              <img src={instagram} className={styles.snsIcon} />
            </PageLink>
            <PageLink href="https://twitter.com/miraiten2024" newTab>
              <img src={x} className={styles.snsIcon} />
            </PageLink>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.clickable}
          onClick={() => {
            setOpen(!open)
          }}
        >
          <img
            src={menu}
            className={styles.button}
            style={{ opacity: open ? 0 : 1 }}
          />
          <img
            src={close}
            className={styles.button}
            style={{ opacity: open ? 1 : 0 }}
          />
        </button>
      </div>
    </div>
  )
}

export default Menu
