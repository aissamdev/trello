import PropTypes from 'prop-types'
import { Dropdown } from '../Dropdown/Dropdown.jsx'
import { memo } from 'react'
import './Card.css'

export const Card = memo(({ title, tags, date, id }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <div className='card-tags'>
          {
            // Filter tags that are true and map their keys as the tag colors
            tags.filter((tag) => tag[1] === true).map(([key, value]) => {
              return <div key={id + key} className={`tag ${key}`} />
            })
          }
        </div>
        <h3 className='card-title'>{title}</h3>
      </div>
      <div className='card-body'>
        <Dropdown items={['Edit', 'Delete']} id={id}>
          <div />
          <div />
          <div />
        </Dropdown>
        <div className='deadline'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='deadline-img'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
          </svg>
          <span className='deadline-text'>{date}</span>
        </div>
      </div>
    </div>
  )
})

Card.displayName = 'Card'

Card.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.array,
  date: PropTypes.string,
  id: PropTypes.string
}
