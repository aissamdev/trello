import { Board } from '../Board/Board'
import { useBoards } from '../../hooks/useBoards.js'
import { AddBoard } from '../AddBoard/AddBoard.jsx'

export const BoardList = () => {
  const { boards, loadingBoards } = useBoards()

  if (loadingBoards) return <p>Loading boards, please wait...</p>

  return (
    <div className='boards'>
      <ul className='boards-list'>
        {
          loadingBoards
            ? <p>Loading boards, please wait...</p>
            : !boards.data
                ? <p>No boards to show, create a new one</p>
                : boards.data.map((board) => (
                  <li key={board.id} className='board-container'>
                    <Board
                      boardTitle={board.attributes.name}
                      id={board.id}
                    />
                  </li>
                ))
        }
      </ul>
      <AddBoard />
    </div>
  )
}
