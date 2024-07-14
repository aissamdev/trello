import PropTypes from 'prop-types'
import { useModal } from '../../hooks/useModal.js'

import './Board.css'

export const Board = ({ boardTitle, children, id }) => {
  const { openModal } = useModal()

  return (
    <div className='board'>
      <div className='board-header'>
        <h2 className='board-title'>{boardTitle}</h2>
        <div className='add-container' onClick={() => openModal(id)}>
          <span>+</span>
        </div>
      </div>
      <div className='board-content'>
        {children}
      </div>
    </div>
  )
}

Board.propTypes = {
  boardTitle: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string
}
