import { Slide } from '../../components/ArticleDetail'

export type AsobiLoaderData = {
  article: {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    team: number
    title: string
    thumbnail: string
    shortDescription: string
    mainVideo?: string
    description?: string
    slide?: Slide
    body?: string
    poster?: string
    posterDescription?: string
  } | null
  articles: {
    id: string
    team: number
    thumbnail: string
    title: string
    shortDescription: string
  }[]
}

export const asobiLoader = async (
  id: string,
  draftKey?: string
): Promise<AsobiLoaderData> => {
  const article = await fetch(
    draftKey
      ? import.meta.env.BASE_URL +
          `/cms/articles/asobi/draft.php?id=${id}&draftKey=${draftKey}`
      : import.meta.env.BASE_URL + `/cms/articles/asobi/${id}.json`,
    {
      cache: 'no-cache',
    }
  )
  if (article.headers.get('content-type') != 'application/json')
    return {
      article: null,
      articles: [],
    }

  const articles = await fetch(
    import.meta.env.BASE_URL + '/cms/articles/asobi/list.json',
    {
      cache: 'no-cache',
    }
  )
  return {
    article: await article.json(),
    articles: await articles.json(),
  }
}
