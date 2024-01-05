import * as styles from './index.css'
import logo from './../../assets/logo.svg'
import { Link } from 'react-router-dom'
import PageLink from '../PageLink'

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.list}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
        <PageLink href="/asobi" underline={false}>
          新しい遊びの提案
        </PageLink>
        <PageLink href="/crowdfunding" underline={false}>
          人に寄り添うサービス・アイテムの提案
        </PageLink>
      </div>
      <div className={styles.list}>
        <div>はこだて未来展</div>
        <PageLink
          href="https://fundesign.jp/miraiten2023w/"
          newTab
          underline={false}
        >
          2023「Odyssey」
        </PageLink>
        <PageLink
          href="https://fundesign.jp/miraiten2022w/"
          newTab
          underline={false}
        >
          2022「探査」
        </PageLink>
        <PageLink
          href="https://fundesign.jp/miraiten2021w/"
          newTab
          underline={false}
        >
          2021「UPDATE」
        </PageLink>
        <PageLink
          href="https://fundesign.jp/miraiten2020w/"
          newTab
          underline={false}
        >
          2020「森の展覧会」
        </PageLink>
        <PageLink
          href="https://fundesign.jp/miraiten2019w/"
          newTab
          underline={false}
        >
          2019「はこだて未来展2019冬」
        </PageLink>
      </div>
    </footer>
  )
}

export default Footer
