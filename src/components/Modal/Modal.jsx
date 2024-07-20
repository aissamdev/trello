import PropTypes from 'prop-types'
import { useModal } from '../../hooks/useModal.js'
import './Modal.css'

export const Modal = ({ title, children }) => {
  const { modal, closeModal } = useModal()
  const className = `modal ${!modal.active ? 'inactive' : ''}`
  const handleClick = () => {
    closeModal()
  }
  return (
    <div className={className}>
      <div className='modal-content'>
        <div className='modal-header'>
          <h2 className='modal-title'>{title}</h2>
          <div className='close-container' onClick={handleClick}>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='close-button'>
              <path strokeLinecap='round' strokeLinejoin='round' d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
            </svg>

          </div>
        </div>
        <div className='modal-body'>
          {children}
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}
