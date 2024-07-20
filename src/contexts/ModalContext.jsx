import { createContext, useState, useCallback } from 'react'
import PropTypes from 'prop-types'

const ModalContext = createContext()

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({ active: false, id: undefined })

  const openModal = useCallback((id) => setModal({ active: true, id }), [])
  const closeModal = useCallback(() => setModal({ active: false, id: undefined }), [])

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

ModalProvider.propTypes = {
  children: PropTypes.node
}

export { ModalContext, ModalProvider }
