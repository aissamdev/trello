import { Modal } from './components/Modal/Modal.jsx'
import { Form } from './components/Form/Form.jsx'
import { BoardList } from './components/Board/BoardList.jsx'
import { AddBoard } from './components/AddBoard/AddBoard.jsx'
import { Sidebar } from './components/Sidebar/Sidebar.jsx'
import { useState } from 'react'
import { Calendar } from './components/Calendar/Calendar.jsx'

function App () {
  const [section, setSection] = useState('boards')

  return (
    <>
      <Sidebar setSection={setSection} />
      {
        section === 'boards' && (
          <section className='boards'>
            <BoardList />
            <AddBoard />
            <Modal title='Add new card'>
              <Form />
            </Modal>
          </section>
        )
      }
      {
        section === 'calendar' && (
          <Calendar />
        )
      }
    </>
  )
}

export default App
