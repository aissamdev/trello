import React, { createContext, useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { getBoards } from '../actions/boards/getBoards'
import { postBoard } from '../actions/boards/postBoard'
import { deleteBoard } from '../actions/boards/deleteBoard'
import { patchBoard } from '../actions/boards/patchBoard'

const BoardsContext = createContext()

const BoardsProvider = ({ children }) => {
  const [boards, setBoards] = useState([])

  const [loadingBoards, setLoadingBoards] = useState(true)
  const [sendingBoard, setSendingBoard] = useState(false)
  const [removingBoard, setRemovingBoard] = useState(false)
  const [updatingBoard, setUpdatingBoard] = useState(false)

  const loadBoards = useCallback(async () => {
    const data = await getBoards()
    setBoards(data)
    setLoadingBoards(false)
  }, [])

  const sendBoard = async ({ input }) => {
    setSendingBoard(true)
    const info = {
      data: {
        type: 'board',
        attributes: input,
        relationships: {
          user: {
            data: {
              type: 'user',
              id: sessionStorage.getItem('id')
            }
          }
        }
      }
    }
    await postBoard({ input: info })
    loadBoards()
    setSendingBoard(false)
  }

  const removeBoard = async ({ id }) => {
    setRemovingBoard(true)
    await deleteBoard({ id })
    loadBoards()
    setRemovingBoard(false)
  }

  const updateBoard = async ({ id, input }) => {
    setUpdatingBoard(true)
    const info = {
      data: {
        type: 'board',
        attributes: input
      }
    }
    await patchBoard({ id, input: info })
    loadBoards()
    setUpdatingBoard(false)
  }

  useEffect(() => {
    loadBoards()
  }, [loadBoards])

  return (
    <BoardsContext.Provider value={{ boards, loadBoards, sendBoard, removeBoard, updateBoard, loadingBoards, sendingBoard, removingBoard, updatingBoard }}>
      {children}
    </BoardsContext.Provider>
  )
}

BoardsProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { BoardsContext, BoardsProvider }
