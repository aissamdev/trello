const TAG_RELEVANCE = {
  red: 5,
  blue: 3,
  green: 1
}

const cardRelevance = (card) => {
  let relevance = 0
  card.tags.filter((tag) => tag[1] === true).forEach(([key, value]) => {
    relevance += TAG_RELEVANCE[key]
  })

  return relevance
}

export const sortByTag = (cards) => {
  return cards.toSorted((a, b) => {
    return cardRelevance(b) - cardRelevance(a)
  })
}
