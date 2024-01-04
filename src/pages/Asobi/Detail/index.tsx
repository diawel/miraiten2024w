import { margin } from '../../../utils/constants'
import { Slide } from '../loader'
import * as styles from './index.css'

export type DetailProps = {
  title: string
  shortDescription: string
  description?: string
  slide?: Slide
  body?: string
  poster?: string
  posterDescription?: string
}

const Detail: React.FC<DetailProps> = ({
  title,
  shortDescription,
  description,
  slide,
  body,
  poster,
  posterDescription,
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
      {poster && (
        <div className={styles.section}>
          <h2>大会ポスター</h2>
          <img className={styles.poster} src={poster} />
          {posterDescription && (
            <div>
              {posterDescription.split('\n').map((line, index) => (
                <p key={line + index} className={styles.description}>
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Detail
