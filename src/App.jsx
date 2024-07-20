import { Modal } from './components/Modal/Modal.jsx'
import { Form } from './components/Form/Form.jsx'
import { BoardList } from './components/Board/BoardList.jsx'
import { AddBoard } from './components/AddBoard/AddBoard.jsx'

function App () {
  return (
    <>
      <aside className='sidebar'>
        <ul>
          <li>Hi</li>
          <li>My boards</li>
          <li>Settings</li>
        </ul>
      </aside>
      <section className='boards'>
        <BoardList />
        <AddBoard />
      </section>
      <Modal title='Add new card'>
        <Form />
      </Modal>
    </>
  )
}

export default App
