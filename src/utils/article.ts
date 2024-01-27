export const orderArticles = <Article extends { team: number }>(
  articles: Article[],
  order: number[]
): Article[] => {
  const orderedArticles: Article[] = []
  order.forEach((teamIndex) => {
    const article = articles.find((article) => article.team == teamIndex)
    if (article) orderedArticles.push(article)
  })
  return orderedArticles
}
