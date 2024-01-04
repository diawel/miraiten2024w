import { margin } from '../../../utils/constants'
import { Slide } from '../loader'
import * as styles from './index.css'

export type DetailProps = {
  title: string
  shortDescription: string
  description?: string
  slide?: Slide
  body?: string
  webCapture?: string
  webDescription?: string
  webUrl?: string
}

const Detail: React.FC<DetailProps> = ({
  title,
  shortDescription,
  description,
  slide,
  body,
  webCapture,
  webDescription,
  webUrl,
}) => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.title}>{title}</h1>
        {description ? (
          <div>
            {description.split('\n').map((line, index) => (
              <p key={line + index} className={styles.description}>
                {line}
              </p>
            ))}
          </div>
        ) : (
          <p className={styles.description}>{shortDescription}</p>
        )}
      </section>
      {slide && (
        <iframe
          className={styles.slide}
          src={slide.type == 'canva' ? `${slide.url}?embed` : slide.url}
          allowFullScreen
        />
      )}
      {body && (
        <>
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{ __html: body }}
          />
          <style>
            {`
              .${styles.body} {
                img {
                  width: 100%;
                  height: auto;
                }
                figure {
                  margin: ${margin.block}px 0;
                }
                p {
                  margin: ${margin.paragraph}px 0;
                }
                :last-child {
                  margin-bottom: 0;
                }
              }
            `}
          </style>
        </>
      )}
      {webCapture ||
        webDescription ||
        (webUrl && (
          <div className={styles.section}>
            {webCapture && <img src={webCapture} />}
            {webDescription && (
              <p className={styles.description}>{webDescription}</p>
            )}
          </div>
          // TODO: アセット待ち
        ))}
    </div>
  )
}

export default Detail
