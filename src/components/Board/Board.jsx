import PropTypes from 'prop-types'
import { memo, useState, useMemo, useCallback } from 'react'
import { useModal } from '../../hooks/useModal.js'
import { Card } from '../Card/Card.jsx'
import { useCards } from '../../hooks/useCards.js'
import { useBoards } from '../../hooks/useBoards.js'
import { BoardMenu } from './BoardMenu.jsx'
import { sortByTag } from '../../logic/sort-by-tag.js'
import { filterCards } from '../../logic/filter-cards.js'

import './Board.css'

export const Board = memo(({ boardTitle, id }) => {
  const { cards, loadingCards } = useCards()
  const { openModal } = useModal()
  const { removeBoard } = useBoards()

  // Lazy initialization of state
  const [sort, setSort] = useState(false)
  const [filter, setFilter] = useState({ active: false, keyword: '' })

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

  const handleOpenModal = useCallback(() => {
    openModal(id)
  }, [openModal, id])

  return (
    <div className='board'>
      <div className='board-header'>
        <h2 className='board-title'>{boardTitle}</h2>
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
