import { margin } from '../../utils/constants'
import { Slide } from '../../pages/Asobi/loader'
import * as styles from './index.css'
import MobileOnly from '../MobileOnly'
import TitleSection from '../TitleSection'
import Paragraph from '../Paragraph'
import PageLink from '../PageLink'

export type ArticleDetailProps = {
  title: string
  shortDescription: string
  description?: string
  slide?: Slide
  body?: string
  poster?: string
  posterDescription?: string
  webCapture?: string
  webDescription?: string
  webUrl?: string
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({
  title,
  shortDescription,
  description,
  slide,
  body,
  poster,
  posterDescription,
  webCapture,
  webDescription,
  webUrl,
}) => {
  return (
    <div className={styles.container}>
      <MobileOnly>
        <TitleSection {...{ title, shortDescription, description }} />
      </MobileOnly>
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
                & img {
                  width: 100%;
                  height: auto;
                }
                & figure {
                  margin: ${margin.siderail}px 0;
                }
                & :is(h3, p, ul, ol) {
                  margin: ${margin.paragraph}px 0;
                }
                & h2 {
                  margin: ${margin.section}px 0 ${margin.siderail}px;
                }
                & ul > li {
                  margin-left: 1.25em;
                  padding-left: 0.25em;
                }
                & ol > li {
                  margin-left: 1.5em;
                }
                & > :first-child {
                  margin-top: 0;
                }
                & > :last-child {
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
          <div className={styles.posterContainer}>
            <img className={styles.poster} src={poster} />
          </div>
          {posterDescription && <Paragraph text={posterDescription} />}
        </div>
      )}
      {(webCapture || webDescription || webUrl) && (
        <div className={styles.section}>
          <h2>Webサイト</h2>
          {webCapture && <img className={styles.webCapture} src={webCapture} />}
          {webDescription && <Paragraph text={webDescription} />}
          {webUrl && (
            <PageLink href={webUrl} underline newTab>
              制作したWebサイトはこちら
            </PageLink>
          )}
        </div>
      )}
    </div>
  )
}

export default ArticleDetail
