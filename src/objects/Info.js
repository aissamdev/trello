export const createInfo = (object) => {
  return Object.entries(object)
}

export const createBoard = ({ boardTitle, cards }) => {
  return {
    boardTitle,
    cards: Object.entries(cards)
  }
}
