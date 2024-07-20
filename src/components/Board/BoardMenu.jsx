import './BoardMenu.css'
import { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { RiSortDesc } from 'react-icons/ri'

export const BoardMenu = memo(({ handleRemove, filter, setFilter, sort, setSort }) => {
  const [open, setOpen] = useState(false)

  const classNameOpen = open ? ' open' : ''
  const classNameSort = sort ? ' sort' : ''
  const classNameFilter = filter.active ? ' filter' : ''

  const handleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    setSort(false)
    setFilter({ active: false, keyword: '' })
  }, [setFilter, setSort])

  const handleChangeFilter = (e) => {
    setFilter(prevState => ({ ...prevState, keyword: e.target.value }))
  }

  return (
    <div className='board-menu'>
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className={'board-menu-icon' + classNameOpen} onClick={handleOpen}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' />
      </svg>
      <div className='board-menu-content'>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className={'remove-icon' + classNameOpen} title='Remove board' onClick={handleRemove}>
          <path strokeLinecap='round' strokeLinejoin='round' d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0' />
        </svg>
        <div className={'sort-icon' + classNameOpen + classNameSort} onClick={() => setSort(!sort)}>
          <RiSortDesc />
        </div>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className={'filter-icon' + classNameOpen + classNameFilter} onClick={() => setFilter(prevState => ({ ...prevState, active: !prevState.active }))}>
          <path strokeLinecap='round' strokeLinejoin='round' d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z' />
        </svg>
        <div className={'input-container filter-input' + classNameOpen + classNameFilter}>
          <input
            type='text'
            id='filter'
            name='filter'
            value={filter.keyword}
            onChange={handleChangeFilter}
            className='input'
            required
            autoComplete='off'
            placeholder='Search...'
          />
        </div>
      </div>
    </div>
  )
})

BoardMenu.displayName = 'BoardMenu'

BoardMenu.propTypes = {
  handleRemove: PropTypes.func,
  filter: PropTypes.any,
  setFilter: PropTypes.func,
  sort: PropTypes.bool,
  setSort: PropTypes.func
}
