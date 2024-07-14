import { Card } from './components/Card.jsx'
import { Board } from './components/Board.jsx'
import { Modal } from './components/Modal.jsx'
import { useEffect, useState } from 'react'
import { Form } from './components/Form.jsx'

function App () {
  const [activeModal, setActiveModal] = useState(false)

  const [loading, setLoading] = useState(true)

  const [count, setCount] = useState(0)

  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((res) => res.json()).then((data) => {
        setCards(data)
        setLoading(false)
        console.log('getted')
      })
  }, [count])

  const updateCount = () => {
    setCount(count + 1)
  }

  if (loading) return <p>Loading...</p>

  return (
    <>
      <Board title='To Do' setActive={setActiveModal}>
        {
          cards && cards.map((card, index) => <Card key={index} title={card.title} tags={card.tags} />)
        }
        {cards.length === 0 && <p>No cards</p>}
      </Board>

      <Modal title='Add new card' active={activeModal} setActive={setActiveModal}>
        <Form setActiveModal={setActiveModal} updateCount={updateCount} />
      </Modal>
    </>
  )
}

export default App
