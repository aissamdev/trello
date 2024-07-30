export const filterCards = (cards, filter) => {
  return cards.data.filter((card) => card.attributes.name.toLowerCase().includes(filter.toLowerCase()) || card.attributes.description.toLowerCase().includes(filter.toLowerCase()))
}
