import * as styles from './index.css'
import logo from './../../assets/logo.svg'
import PageLink from '../PageLink'

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.list}>
        <PageLink href="/" animate>
          <img src={logo} alt="logo" className={styles.logo} />
        </PageLink>
        <PageLink href="/asobi" underline={false} animate>
          - 新しい遊びの提案
        </PageLink>
        <PageLink href="/crowdfunding" underline={false} animate>
          - 人に寄り添うサービス・アイテムの提案
        </PageLink>
      </div>
      <div className={styles.list}>
        <h6 className={styles.listTitle}>はこだて未来展</h6>
        <PageLink href="https://fundesign.jp/miraiten2023w/" newTab>
          2023「Odyssey」
        </PageLink>
        <PageLink href="https://fundesign.jp/miraiten2022w/" newTab>
          2022「探査」
        </PageLink>
        <PageLink href="https://fundesign.jp/miraiten2021w/" newTab>
          2021「UPDATE」
        </PageLink>
        <PageLink href="https://fundesign.jp/miraiten2020w/" newTab>
          2020「森の展覧会」
        </PageLink>
        <PageLink href="https://fundesign.jp/miraiten2019w/" newTab>
          2019「はこだて未来展2019冬」
        </PageLink>
      </div>
    </footer>
  )
}

export default Footer
