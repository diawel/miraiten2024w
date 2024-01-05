import PcOnly from '../PcOnly'
import TitleSection from '../TitleSection'
import * as styles from './index.css'

export type ArticleAbstractProps = {
  thumbnail: string
  title: string
  shortDescription: string
  description?: string
  mainVideo?: string
}

const ArticleAbstract: React.FC<ArticleAbstractProps> = ({
  thumbnail,
  title,
  shortDescription,
  description,
  mainVideo,
}) => {
  return (
    <div className={styles.container}>
      {mainVideo ? (
        <iframe
          className={styles.mainVisual.video}
          src={mainVideo.replace(
            'https://youtu.be/',
            'https://www.youtube.com/embed/'
          )}
          allowFullScreen
        />
      ) : (
        <img className={styles.mainVisual.thumbnail} src={thumbnail} />
      )}
      <PcOnly>
        <TitleSection {...{ title, shortDescription, description }} />
      </PcOnly>
    </div>
  )
}

export default ArticleAbstract
