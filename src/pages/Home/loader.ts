export type HomeLoaderData = {
  crowdfundingArticles: {
    id: string
    team: number
    thumbnail: string
    title: string
    shortDescription: string
  }[]
  asobiArticles: {
    id: string
    team: number
    thumbnail: string
    title: string
    shortDescription: string
  }[]
}

export const homeLoader = async (): Promise<HomeLoaderData> => {
  const crowdfundingArticles = await fetch(
    import.meta.env.BASE_URL + '/cms/articles/crowdfunding/list.json',
    {
      cache: 'no-cache',
    }
  )
  const asobiArticles = await fetch(
    import.meta.env.BASE_URL + '/cms/articles/asobi/list.json',
    {
      cache: 'no-cache',
    }
  )

  return {
    crowdfundingArticles: await crowdfundingArticles.json(),
    asobiArticles: await asobiArticles.json(),
  }
}
