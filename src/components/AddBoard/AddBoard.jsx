import './AddBoard.css'
import { useState } from 'react'
import { useBoards } from '../../hooks/useBoards.js'

export const AddBoard = () => {
  const [open, setOpen] = useState(false)
  const [state, setState] = useState({ name: '' })
  const { sendBoard } = useBoards()

  const className = open ? ' open' : ''

  const handleSubmit = (e) => {
    e.preventDefault()
    sendBoard(state)
    setOpen(!open)
    setState({ name: '' })
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const handleClose = () => {
    setOpen(!open)
    setState({ name: '' })
  }

  return (
    <form className={'add-board-container' + className} onSubmit={handleSubmit}>
      {
        open &&
          <div className='add-board-header'>
            <div className={'input-container' + className}>
              <input
                type='text'
                id='board-title'
                name='name'
                value={state.name}
                onChange={handleChange}
                className='input'
                required
                autoComplete='off'
              />
              <label htmlFor='board-title' className='placeholder'>Card Title</label>
            </div>
            <div className='close-board-add-container' onClick={handleClose}>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='black' className='close-add-board-img'>
                <path strokeLinecap='round' strokeLinejoin='round' d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
              </svg>
            </div>
          </div>
      }
      {
        open
          ? <button className='btn' type='submit'>Create board</button>
          : <button className='add-board' onClick={handleClose}><span>+</span> Add a new Board</button>
      }
    </form>
  )
}
