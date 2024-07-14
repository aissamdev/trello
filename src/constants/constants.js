import { createBoard } from '../objects/Info'

const INITIAL_BOARDS = [
  createBoard({
    boardTitle: 'ToDo',
    cards: []
  }),
  createBoard({
    boardTitle: 'In Progress',
    cards: []
  }),
  createBoard({
    boardTitle: 'Done',
    cards: []
  })
]

export { INITIAL_BOARDS }
