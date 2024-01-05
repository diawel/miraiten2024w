import { Link } from 'react-router-dom'
import * as styles from './index.css'
import furtherDetailButton from '../../../assets/furtherDetailButton.svg'
import Paragraph from '../../../components/Paragraph'

const Detail: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2>コンセプト</h2>
        <Paragraph
          text={[
            '公立はこだて未来情報デザインコース2年では情報技術と表現方法を組み合わせ新しい〇〇を提案しました。',
            '刻々と変化する日常に対しての更新また変化を全て悲観的ではなくプラスに変化させたいという想いを込めた今回の展覧会テーマ「UPDATE」',
            'この時代だからこその未来への更新過程をどうぞお楽しみください。',
          ]}
        />
      </section>
      <section className={styles.section}>
        <h2>展示内容</h2>
        <h3>新しい遊びの提案</h3>
        <Paragraph
          text={[
            '世界には、鬼ごっこや缶蹴り、カードゲームなどたくさんの遊びが存在します。',
            'この講義では、遊びの分析を行うことで、なぜその遊びは楽しいと',
          ]}
        />
        <div className={styles.buttonContainer}>
          <Link to="/asobi">
            <img src={furtherDetailButton} />
          </Link>
        </div>
        <h3>人に寄り添うサービス・アイテムの提案</h3>
        <Paragraph
          text={[
            '世界には、鬼ごっこや缶蹴り、カードゲームなどたくさんの遊びが存在します。',
            'この講義では、遊びの分析を行うことで、なぜその遊びは楽しいと',
          ]}
        />
        <div className={styles.buttonContainer}>
          <Link to="/crowdfunding">
            <img src={furtherDetailButton} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Detail
