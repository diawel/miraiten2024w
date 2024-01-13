import * as styles from './index.css'
import showListButton from '../../../assets/showListButton.svg'
import Paragraph from '../../../components/Paragraph'
import PageLink from '../../../components/PageLink'

const Detail: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2>はこだて未来展とは</h2>
        <Paragraph
          text={[
            '公立はこだて未来情報デザインコース2年では情報技術と表現方法を組み合わせ新しい〇〇を提案しました。',
            '刻々と変化する日常に対しての更新また変化を全て悲観的ではなくプラスに変化させたいという想いを込めた今回の展覧会テーマ「UPDATE」',
            'この時代だからこその未来への更新過程をどうぞお楽しみください。',
          ]}
        />
      </section>
      <section className={styles.section}>
        <h2>FUN!tasista!とは</h2>
        <Paragraph
          text={
            '公立はこだて未来大学をアルファベットで表した「FUN」、楽しさを指す「fun」、創造力に長けた多芸多才な人を指す「fantasista」。これらを掛け合わせた「FUN!tasista!」は、本校ならではのひらめきと楽しさで様々なものを創造する集団を表しています。'
          }
        />
      </section>
      <section className={styles.section}>
        <h2>展示内容</h2>
        <h3>新しい遊びの提案</h3>
        <Paragraph
          text={[
            '私たちは遊びについての分析を行い、その結果から新しい遊びを提案しました。',
            '私たちが考案した遊びは感覚機能に制限を設け、複数人で楽しむことができるゲームです。手遊び、カードゲーム、鬼ごっこなど、さまざまな遊びがありますので、お気に入りの遊びを見つけたり、実際に遊んで体験したりして、楽しんでいただければと思います。',
          ]}
        />
        <div className={styles.buttonContainer}>
          <PageLink href="/asobi">
            <img src={showListButton} />
          </PageLink>
        </div>
        <h3>人に寄り添うサービス・アイテムの提案</h3>
        <Paragraph
          text={[
            'クラウドファンディングの分析を行なった結果から、新たな私たちだけのアイデアを提案しました。lT技術を用いた、一歩踏み込んでユーザーに寄り添うサービスやアイテムとなっています。',
            '実際のクラウドファンディングの募集ページの分析による良い点や改善点を取り入れることでより高い完成度に仕上げました。支援したいクラウドファンディングを探してみてください。',
          ]}
        />
        <div className={styles.buttonContainer}>
          <PageLink href="/crowdfunding">
            <img src={showListButton} />
          </PageLink>
        </div>
      </section>
      <section className={styles.section}>
        <h2>前回開催の様子</h2>
        <img src="/assets/last_miraiten.jpg" />
        <Paragraph
          text={[
            '世界には、鬼ごっこや缶蹴り、カードゲームなどたくさんの遊びが存在します。',
            'この講義では、遊びの分析を行うことで、なぜその遊びは楽しいと',
          ]}
        />
        <a
          href=""
          onClick={(e) => {
            e.preventDefault()
            window.scrollBy({
              top: window.document.body.scrollHeight,
              behavior: 'smooth',
            })
          }}
        >
          前回以前のWebサイトはこちら
        </a>
      </section>
      <section className={styles.section}>
        <h2>アクセス</h2>
        <Paragraph
          text={
            '〒040-0011\n北海道函館市本町24-1\nはこだてコミュニティプラザ Gスクエア4階'
          }
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.7993808277797!2d140.74942041233865!3d41.789537071131654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9ef4706e5260b9%3A0x5afbdc8b12a17205!2z5Ye96aSo44Kz44Of44Ol44OL44OG44Kj44OX44Op44K2IEfjgrnjgq_jgqjjgqI!5e0!3m2!1sja!2sjp!4v1705076216357!5m2!1sja!2sjp"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.map}
        />
      </section>
    </div>
  )
}

export default Detail
