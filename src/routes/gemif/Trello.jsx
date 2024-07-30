import { Modal } from '../../components/Modal/Modal.jsx'
import { Form } from '../../components/Form/Form.jsx'
import { BoardList } from '../../components/Board/BoardList.jsx'
import { Sidebar } from '../../components/Sidebar/Sidebar.jsx'
import { useState } from 'react'
import { Calendar } from '../../components/Calendar/Calendar.jsx'
import { ModalProvider } from '../../contexts/ModalContext.jsx'
import { BoardsProvider } from '../../contexts/BoardsContext.jsx'
import { CardsProvider } from '../../contexts/CardsContext.jsx'
import './trello.css'

function Trello () {
  const [section, setSection] = useState('boards')

  return (
    <div className='trello'>
      <main>
        <BoardsProvider>
          <CardsProvider>
            <ModalProvider>
              <Sidebar setSection={setSection} />
              <section className='content'>
                {
                  section === 'boards' && (
                    <>
                      <BoardList />
                      <Modal title='Add new card'>
                        <Form />
                      </Modal>
                    </>
                  )
                }
                {
                  section === 'calendar' && (
                    <Calendar />
                  )
                }
              </section>
            </ModalProvider>
          </CardsProvider>
        </BoardsProvider>
      </main>
    </div>
  )
}

export default Trello
