import { useContext } from 'react'
import { CardsContext } from '../contexts/CardsContext.jsx'

export const useCards = () => {
  return useContext(CardsContext)
}
