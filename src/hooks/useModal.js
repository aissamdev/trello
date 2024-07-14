import { useContext } from 'react'
import { ModalContext } from '../contexts/ModalContext.jsx'

export const useModal = () => {
  return useContext(ModalContext)
}
