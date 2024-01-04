export type AsobiArticlesLoaderData = {
  articles: {
    id: string
    team: number
    thumbnail: string
    title: string
    shortDescription: string
  }[]
}

export const crowdfundingArticlesLoader =
  async (): Promise<AsobiArticlesLoaderData> => {
    const articles = await fetch(
      import.meta.env.BASE_URL + '/cms/articles/crowdfunding/list.json',
      {
        cache: 'no-cache',
      }
    )

    return {
      articles: await articles.json(),
    }
  }
