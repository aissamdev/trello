import PropTypes from 'prop-types'
import { useState } from 'react'
import './Dropdown.css'
import { useCards } from '../../hooks/useCards'

export const Dropdown = ({ children, id }) => {
  const [open, setOpen] = useState(false)
  const { removeCard, removingCard } = useCards()

  const className = open ? 'open' : ''

  const handleClick = (e) => {
    if (e.target.name === 'remove') {
      removeCard(id)
    }
    setOpen(false)
  }

  return (
    <div className='dropdown'>
      <button className={'dropbtn ' + className} onClick={() => setOpen(!open)}>{children}</button>
      <div className={'dropdown-content ' + className}>
        <a key={id + 'edit'} name='edit' onClick={handleClick}>Edit</a>
        <a key={id + 'remove'} name='remove' onClick={handleClick}>{removingCard ? 'Removing...' : 'Remove'}</a>
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  children: PropTypes.node,
  items: PropTypes.array,
  id: PropTypes.string
}
