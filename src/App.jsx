import { useEffect, useState } from 'react'
import { Card } from './components/Card/Card.jsx'
import { Board } from './components/Board/Board.jsx'
import { Modal } from './components/Modal/Modal.jsx'
import { Form } from './components/Form/Form.jsx'

function App () {
  const [loadingCards, setLoadingCards] = useState(true)
  const [loadingBoards, setLoadingBoards] = useState(true)
  const [boards, setBoards] = useState()
  const [cards, setCards] = useState()

  const fetchCards = async () => {
    console.log('fetching cards...')
    try {
      const cardResponse = await fetch('https://trello-server-theta.vercel.app/api/card')
      const cardData = await cardResponse.json()
      setCards(cardData)
      console.log(cardData)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoadingCards(false)
    }
  }

  const fetchBoards = async () => {
    console.log('fetching boards...')
    try {
      const boardResponse = await fetch('https://trello-server-theta.vercel.app/api/board')
      const boardData = await boardResponse.json()
      setBoards(boardData)
    } catch (error) {
      console.error('Error fetching boards:', error)
    } finally {
      setLoadingBoards(false)
    }
  }

  useEffect(() => {
    fetchBoards()
    fetchCards()
  }, [])

  const handleChange = () => {
    fetchBoards()
    fetchCards()
  }

  if (loadingCards || loadingBoards) return <p>Loading...</p>

  return (
    <main>
      {
        boards.map((board) => (
          <Board
            key={board.id}
            boardTitle={board.name}
            id={board.id}
          >
            {
              cards.filter((card) => card.boardId === board.id).map((card) => {
                return (
                  <Card
                    key={card.id}
                    title={card.name}
                    tags={card.tags}
                    date={card.date}
                    id={card.id}
                    ID={board.id}
                    handleChange={handleChange}
                  />
                )
              })
              /*
              cards.length > 0
                ? (board.cards.map((card) => (
                  <Card key={card.id} title={card.title} tags={card.tags} date={card.date} id={card.id} ID={board.id} handleChange={handleChange} />
                  )))
                : (<p>No cards</p>)
              */
            }
          </Board>
        ))
      }

      <Modal title='Add new card'>
        <Form onCardAdd={handleChange} />
      </Modal>
    </main>
  )
}

export default App
