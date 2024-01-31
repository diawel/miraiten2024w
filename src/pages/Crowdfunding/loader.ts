import { Slide, SlideType } from '../../components/ArticleDetail'

export type CrowdfundingLoaderData = {
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
    slideType?: SlideType
    body?: string
    webCapture?: string
    webDescription?: string
    webUrl?: string
  } | null
  articles: {
    id: string
    team: number
    thumbnail: string
    title: string
    shortDescription: string
  }[]
}

export const crowdfundingLoader = async (
  id: string,
  draftKey?: string
): Promise<CrowdfundingLoaderData> => {
  const articles = await fetch(
    import.meta.env.BASE_URL + '/cms/articles/crowdfunding/list.json',
    {
      cache: 'no-cache',
    }
  )
  const article = await fetch(
    draftKey
      ? import.meta.env.BASE_URL +
          `/cms/articles/crowdfunding/draft.php?id=${id}&draftKey=${draftKey}`
      : import.meta.env.BASE_URL + `/cms/articles/crowdfunding/${id}.json`,
    {
      cache: 'no-cache',
    }
  )
  return {
    article: await article.json(),
    articles: await articles.json(),
  }
}
