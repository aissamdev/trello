import React, { createContext, useState, useEffect } from 'react'
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

  const loadCards = async () => {
    const data = await getCards()
    setCards(data)
    setLoadingCards(false)
  }

  const sendCard = async (data) => {
    setSendingCard(true)
    await postCard(data)
    loadCards()
    setSendingCard(false)
  }

  const removeCard = async (id) => {
    setRemovingCard(true)
    await deleteCard(id)
    loadCards()
    setRemovingCard(false)
  }

  useEffect(() => {
    loadCards()
  }, [])

  return (
    <CardsContext.Provider value={{ cards, loadCards, sendCard, removeCard, loadingCards, sendingCard, removingCard }}>
      {children}
    </CardsContext.Provider>
  )
}

CardsProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { CardsContext, CardsProvider }
