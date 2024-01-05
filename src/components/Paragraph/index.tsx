import { Fragment } from 'react'
import * as styles from './index.css'

export type ParagraphProps = {
  text: string | string[]
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  const paragraphs = Array.isArray(text) ? text : text.split(/\n{2,}/)
  return (
    <div className={styles.container}>
      {paragraphs.map((paragraph, index) => (
        <p key={paragraph + index}>
          {paragraph.split('\n').map((line, index) => (
            <Fragment key={line + index}>
              {line}
              <br />
            </Fragment>
          ))}
        </p>
      ))}
    </div>
  )
}

export default Paragraph
