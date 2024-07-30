import { useState } from 'react'
import { useBoards } from '../../hooks/useBoards.js'
import { useAuth } from '../../hooks/useAuth.js'

export const AddBoard = () => {
  const [open, setOpen] = useState(false)
  const { sendBoard } = useBoards()
  const [state, setState] = useState({ name: '' })

  const { user } = useAuth()

  const className = open ? ' open' : ''

  const handleSubmit = (e) => {
    e.preventDefault()
    sendBoard({ input: state })
    setOpen(!open)
    setState(prevState => ({ ...prevState, name: '' }))
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setState(prevState => ({ ...prevState, [name]: value }))
  }

  const handleClose = () => {
    setOpen(!open)
    setState(prevState => ({ ...prevState, name: '' }))
    console.log(user)
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
