import { useState } from 'react'
import { CalendarItem } from './CalendarItem.jsx'
import { createCalendar, MONTHS, DAYS } from '../../logic/create-calendar.js'

export const Calendar = () => {
  const [month, setMonth] = useState(6)

  const dates = createCalendar({ month })

  return (
    <section className='calendar'>
      <div className='calendar-header'>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='prev-month' onClick={() => setMonth(month - 1)}>
          <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18' />
        </svg>

        <h2>{MONTHS[month]}</h2>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='next-month' onClick={() => setMonth(month + 1)}>
          <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
        </svg>

      </div>
      <ul className='items'>
        {
          DAYS.map((day) => (
            <li
              className='days'
              key={day}
            >
              {day}
            </li>
          ))
        }
        {
          dates.map((item) => (
            <CalendarItem
              key={item.date.getTime()}
              item={item}
            />
          ))
        }
      </ul>
    </section>
  )
}
