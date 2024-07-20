export const filterCards = (cards, filter) => {
  return cards.filter((card) => card.name.toLowerCase().includes(filter.toLowerCase()) || card.description.toLowerCase().includes(filter.toLowerCase()))
}
