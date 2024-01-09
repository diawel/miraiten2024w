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

export const asobiLoader = async (
  id: string,
  draftKey?: string
): Promise<AsobiLoaderData> => {
  if (draftKey) {
    const articles = await fetch(
      import.meta.env.BASE_URL +
        `/cms/articles/asobi/draft.php?id=${id}&draftKey=${draftKey}`,
      {
        cache: 'no-cache',
      }
    )

    return {
      article: await articles.json(),
    }
  }

  const articles = await fetch(
    import.meta.env.BASE_URL + `/cms/articles/asobi/${id}.json`,
    {
      cache: 'no-cache',
    }
  )

  if (articles.headers.get('content-type') != 'application/json')
    return { article: null }

  return {
    article: await articles.json(),
  }
}
