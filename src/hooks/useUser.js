import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext.jsx'

export const useUser = () => {
  return useContext(UserContext)
}
