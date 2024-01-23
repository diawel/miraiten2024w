import { margin } from '../../utils/constants'
import { Slide } from '../../pages/Asobi/loader'
import * as styles from './index.css'
import MobileOnly from '../MobileOnly'
import TitleSection from '../TitleSection'
import Paragraph from '../Paragraph'
import PageLink from '../PageLink'
import { ArticleAbstract } from '../ArticleList'
import ArticleListSmall from '../ArticleListSmall'
import voteButton from '../../assets/voteButton.svg'

export type ArticleDetailProps = {
  id: string
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
  api: 'asobi' | 'crowdfunding'
  articles: ArticleAbstract[]
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({
  id,
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
  api,
  articles,
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
          key={slide.url}
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
              .${styles.body} img {
                width: 100%;
                height: auto;
              }
              .${styles.body} figure {
                margin: ${margin.siderail}px 0;
              }
              .${styles.body} :is(h3, p, ul, ol, li) {
                margin: ${margin.paragraph}px 0;
              }
              .${styles.body} h2 {
                margin: ${margin.section}px 0 ${margin.siderail}px;
              }
              .${styles.body} ul > li {
                margin-left: 1.25em;
                padding-left: 0.25em;
              }
              .${styles.body} ol > li {
                margin-left: 1.5em;
              }
              .${styles.body} > :first-child {
                margin-top: 0;
              }
              .${styles.body} > :last-child {
                margin-bottom: 0;
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

      <div className={styles.buttonContainer}>
        <PageLink href="https://docs.google.com/forms" newTab>
          <img src={voteButton} />
        </PageLink>
      </div>
      <ArticleListSmall
        articles={articles.filter((article) => article.id != id)}
        {...{ api }}
      />
    </div>
  )
}

export default ArticleDetail
