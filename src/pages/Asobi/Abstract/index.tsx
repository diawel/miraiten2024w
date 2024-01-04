import * as styles from './index.css'

export type AbstractProps = {
  thumbnail: string
  mainVideo?: string
}

const Abstract: React.FC<AbstractProps> = ({ thumbnail, mainVideo }) => {
  return (
    <div className={styles.container}>
      {mainVideo ? (
        <iframe
          className={styles.mainVideo}
          src={mainVideo.replace(
            'https://youtu.be/',
            'https://www.youtube.com/embed/'
          )}
          allowFullScreen
        />
      ) : (
        <img className={styles.mainVideo} src={thumbnail} />
      )}
    </div>
  )
}

export default Abstract
