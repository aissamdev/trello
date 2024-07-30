import React, { createContext, useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { getCards } from '../actions/cards/getCards'
import { postCard } from '../actions/cards/postCard'
import { deleteCard } from '../actions/cards/deleteCard'

const CardsContext = createContext()

const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([])

  const [loadingCards, setLoadingCards] = useState(true)
  const [sendingCard, setSendingCard] = useState(false)
  const [removingCard, setRemovingCard] = useState(false)

  const loadCards = useCallback(async () => {
    const fetchedCards = await getCards()
    setCards({ ...fetchedCards, data: fetchedCards.data.map((card) => ({ ...card, attributes: { ...card.attributes, tags: Object.entries(card.attributes.tags) } })) })
    setLoadingCards(false)
  }, [])

  const sendCard = async ({ input, boardId }) => {
    setSendingCard(true)

    const info = {
      data: {
        type: 'card',
        attributes: input,
        relationships: {
          board: {
            data: {
              type: 'board',
              id: boardId
            }
          }
        }
      }
    }

    await postCard({ input: info })
    loadCards()
    setSendingCard(false)
  }

  const removeCard = async ({ id }) => {
    setRemovingCard(true)
    await deleteCard({ id })
    loadCards()
    setRemovingCard(false)
  }

  useEffect(() => {
    loadCards()
    setCards()
  }, [loadCards])

  return (
    <CardsContext.Provider value={{ cards, setCards, loadCards, sendCard, removeCard, loadingCards, sendingCard, removingCard }}>
      {children}
    </CardsContext.Provider>
  )
}

CardsProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { CardsContext, CardsProvider }
