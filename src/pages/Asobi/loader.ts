export type Slide = {
  url: string
  type: 'canva' | 'speakerdeck'
}

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
}

export const asobiLoader = async (id: string): Promise<AsobiLoaderData> => {
  const articles = await fetch(
    import.meta.env.BASE_URL + `/cms/articles/asobi/${id}.json`,
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
