import { Board } from '../Board/Board'
import { useBoards } from '../../hooks/useBoards.js'
import './BoardList.css'

export const BoardList = () => {
  const { boards, loadingBoards } = useBoards()

  if (loadingBoards) return <p>Loading boards, please wait...</p>

  return (
    <ul className='boards-list'>
      {
        loadingBoards
          ? <p>Loading boards, please wait...</p>
          : !boards
              ? <p>No boards to show, create a new one</p>
              : boards.map((board) => (
                <li key={board.id} className='board-container'>
                  <Board
                    boardTitle={board.name}
                    id={board.id}
                  />
                </li>
              ))
      }
    </ul>
  )
}
