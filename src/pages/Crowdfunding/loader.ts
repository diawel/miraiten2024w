export type Slide = {
  url: string
  type: 'canva' | 'speakerdeck'
}

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
    body?: string
    webCapture?: string
    webDescription?: string
    webUrl?: string
  } | null
}

export const crowdfundingLoader = async (
  id: string
): Promise<CrowdfundingLoaderData> => {
  const articles = await fetch(
    import.meta.env.BASE_URL + `/cms/articles/crowdfunding/${id}.json`,
    {
      cache: 'no-cache',
    }
  )

  const possivelyJson = await articles.text()
  if (!possivelyJson.match(/(\[.*\]|{.*})/)) return { article: null }

  return {
    article: JSON.parse(possivelyJson),
  }
}