import PropTypes from 'prop-types'
import { memo, useState, useMemo, useCallback } from 'react'
import { useModal } from '../../hooks/useModal.js'
import { Card } from '../Card/Card.jsx'
import { useCards } from '../../hooks/useCards.js'
import { useBoards } from '../../hooks/useBoards.js'
import { BoardMenu } from './BoardMenu.jsx'
import { sortByTag } from '../../logic/sort-by-tag.js'
import { filterCards } from '../../logic/filter-cards.js'

export const Board = memo(({ boardTitle, id }) => {
  const { cards, loadingCards } = useCards()
  const { openModal } = useModal()
  const { removeBoard, updateBoard } = useBoards()

  // Lazy initialization of state
  const [sort, setSort] = useState(false)
  const [filter, setFilter] = useState({ active: false, keyword: '' })
  const [editTitle, setEditTitle] = useState({ active: false, value: boardTitle })

  // Memoize the handleRemove function
  const handleRemove = useCallback(async () => {
    removeBoard(id)
  }, [id, removeBoard])

  // Memoize filtered and sorted cards
  const filteredCards = useMemo(() => {
    if (!cards) return []
    return filter.active ? filterCards(cards, filter.keyword) : cards
  }, [cards, filter])

  const sortedCards = useMemo(() => {
    return sort ? sortByTag(filteredCards) : filteredCards
  }, [filteredCards, sort])

  const handleEditTitle = useCallback(() => {
    setEditTitle(prevState => ({ ...prevState, active: !editTitle.active }))
  }, [editTitle, setEditTitle])

  const handleChange = useCallback((e) => {
    setEditTitle(prevState => ({ ...prevState, value: e.target.value }))
  }, [setEditTitle])

  const handleUpdateTitle = useCallback(() => {
    console.log(editTitle.value)
    updateBoard({ id, data: { name: editTitle.value } })
    setEditTitle(prevState => ({ ...prevState, active: false }))
  }, [editTitle, id, setEditTitle, updateBoard])

  const handleOpenModal = useCallback(() => {
    openModal(id)
  }, [openModal, id])

  return (
    <div className='board'>
      <div className='board-header'>
        <div className='board-title-container'>
          {
            editTitle.active
              ? (
                <>
                  <input className='edit-board-title-input' type='text' value={editTitle.value} onChange={handleChange} />
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='check-board-title' onClick={handleUpdateTitle}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 12.75 6 6 9-13.5' />
                  </svg>
                </>
                )
              : (
                <>
                  <h2 className='board-title'>{editTitle.value}</h2>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='edit-board-title' onClick={handleEditTitle}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10' />
                  </svg>
                </>
                )
          }
        </div>
        <BoardMenu
          handleRemove={handleRemove}
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
        />
      </div>
      <div className='board-content'>
        {loadingCards
          ? <p>Loading cards, please wait...</p>
          : sortedCards.filter((card) => card.boardId === id).map((card) => (
            <Card
              key={card.id}
              title={card.name}
              tags={card.tags}
              date={card.date}
              id={card.id}
            />
          )
          )}
      </div>
      <div className='board-footer'>
        <div className='add-container' onClick={handleOpenModal}>
          <span>+</span> Add a new card
        </div>
      </div>
    </div>
  )
})

Board.displayName = 'Board'

Board.propTypes = {
  boardTitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}
