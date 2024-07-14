import PropTypes from 'prop-types'
import { useState } from 'react'
import './Dropdown.css'

export const Dropdown = ({ children, items, id, ID, onCardDelete }) => {
  const [open, setOpen] = useState(false)

  const className = open ? 'open' : ''

  const handleClick = () => {
    fetch('https://trello-server-theta.vercel.app/api/card/' + id, {
      method: 'DELETE'
    }).then(() => {
      setOpen(false)
    })
  }

  return (
    <div className='dropdown'>
      <button className={'dropbtn ' + className} onClick={() => setOpen(!open)}>{children}</button>
      <div className={'dropdown-content ' + className}>
        {items.map((item, index) => (
          <a key={index} onClick={handleClick}>{item}</a>
        ))}
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  children: PropTypes.node,
  items: PropTypes.array,
  id: PropTypes.string,
  ID: PropTypes.string,
  onCardDelete: PropTypes.func
}
