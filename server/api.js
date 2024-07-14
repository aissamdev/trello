import express, { json } from 'express'
import cors from 'cors'
import { readJSON, setId } from './utils.js'

let boards = readJSON('./database/db.json')

const app = express()

app.use(json())
app.use(cors())

app.get('/', (req, res) => {
  res.json(boards)
})

app.post('/:id', (req, res) => {
  const { id } = req.params
  const data = req.body
  console.log(id)
  console.log(boards)
  const board = boards.find(board => board.id === id)

  board.cards.push(setId(data))
  res.json(boards)
})

app.delete('/:ID/:id', (req, res) => {
  const { ID, id } = req.params
  const targetBoard = boards.findIndex(board => board.id === ID)
  const targetCard = boards[targetBoard].cards.findIndex(card => card.id === id)
  boards[targetBoard].cards.splice(targetCard, 1)
  res.json(boards)
})

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  boards = boards.map(board => setId(board))
  console.log('Initial boards: ', boards)
})
