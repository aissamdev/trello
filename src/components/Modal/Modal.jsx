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
          <div className='close-container'>
            <img src='https://cdn-icons-png.flaticon.com/512/64/64498.png' alt='close' className='close-button' onClick={handleClick} />
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
