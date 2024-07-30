import PropTypes from 'prop-types'
import { useCards } from '../../hooks/useCards'

export const CalendarItem = ({ item }) => {
  const { cards } = useCards()

  const className = item.is ? ' calendar-item-is' : 'calendar-item'

  return (
    <li className={className}>
      <div className='item-title-container'>
        <h3>{item.date.getDate()}</h3>
      </div>
      <ul className='calendar-item-content'>
        {
          cards.data.filter((card) => {
            const cardDate = new Date(card.attributes.date)
            return cardDate.getFullYear() === item.date.getFullYear() &&
              cardDate.getMonth() === item.date.getMonth() &&
              cardDate.getDate() === item.date.getDate()
          }).map((card) => (
            <li key={card.id}>
              {card.attributes.name}
            </li>
          ))
        }
      </ul>
    </li>
  )
}

CalendarItem.propTypes = {
  item: PropTypes.object
}
