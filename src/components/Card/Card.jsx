import PropTypes from 'prop-types'
import { Dropdown } from '../Dropdown/Dropdown.jsx'
import './Card.css'

export const Card = ({ title, tags, date, id, ID, handleChange }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <div className='card-tags'>
          {
            // Filter tags that are true and map their keys as the tag colors
            tags.map((tag, index) => {
              return <div key={index} className={`tag ${tag}`} />
            })
          }
        </div>
        <h3 className='card-title'>{title}</h3>
      </div>
      <div className='card-body'>
        <Dropdown items={['Edit', 'Delete']} id={id} ID={ID} onCardDelete={handleChange}>
          <div />
          <div />
          <div />
        </Dropdown>
        <div className='deadline'>
          <img src='https://uxwing.com/wp-content/themes/uxwing/download/time-and-date/clock-icon.png' alt='deadline' className='deadline-img' />
          <span className='deadline-text'>{date}</span>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.array,
  date: PropTypes.string,
  id: PropTypes.string,
  ID: PropTypes.string,
  handleChange: PropTypes.func
}
