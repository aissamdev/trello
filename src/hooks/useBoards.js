import { useContext } from 'react'
import { BoardsContext } from '../contexts/BoardsContext.jsx'

export const useBoards = () => {
  return useContext(BoardsContext)
}
