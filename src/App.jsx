import { Card } from './components/Card/Card.jsx'
import { Board } from './components/Board/Board.jsx'
import { Modal } from './components/Modal/Modal.jsx'
import { Form } from './components/Form/Form.jsx'
import { useCards } from './hooks/useCards.js'
import { useBoards } from './hooks/useBoards.jsx'

function App () {
  const { boards, loadingBoards } = useBoards()
  const { cards, loadingCards } = useCards()

  if (loadingBoards) return <p>Loading boards, please wait...</p>

  return (
    <main>
      <section className='boards'>
        <ul className='boards-list'>
          {
            !boards
              ? <p>No boards to show, create a new one</p>
              : boards.map((board) => (
                <li key={board.id} className='board-container'>
                  <Board
                    boardTitle={board.name}
                    id={board.id}
                  >
                    {
                      loadingCards
                        ? <p>Loading cards, please wait...</p>
                        : cards.filter((card) => card.boardId === board.id).map((card) => {
                          return (
                            <Card
                              key={card.id}
                              title={card.name}
                              tags={card.tags}
                              date={card.date}
                              id={card.id}
                            />
                          )
                        })
                    }
                  </Board>
                </li>
              ))
          }

          <li className='board-container'>
            <Board
              boardTitle='Add new board'>

            </Board>
          </li>
        </ul>

      </section>

      <Modal title='Add new card'>
        <Form />
      </Modal>
    </main>
  )
}

export default App
