import PropTypes from 'prop-types'
import { useState, useRef } from 'react'
import { useModal } from '../../hooks/useModal.js'
import './Form.css'
import { useCards } from '../../hooks/useCards.js'

export const Form = () => {
  const INITIAL_STATE = useRef({
    name: '',
    tags: [],
    date: '',
    time: '00:00',
    description: ''
  })
  const { modal, closeModal } = useModal()
  const [state, setState] = useState(INITIAL_STATE.current)
  const { sendCard, sendingCard } = useCards()

  const handleChange = (e) => {
    const { name, value } = e.target
    setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleTagsChange = (e) => {
    const { name, checked } = e.target
    if (checked) {
      setState(prevState => ({
        ...prevState, tags: [...prevState.tags, name]
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { name, tags, date, description, time } = state

    const inputData = {
      name,
      tags,
      date,
      time,
      description,
      boardId: modal.id
    }

    sendCard(inputData)
    resetForm()
    closeModal()
  }

  const handleKeyDown = (e) => {
    e.target.style.height = 'inherit'
    e.target.style.height = `${e.target.scrollHeight}px`
    e.target.style.height = `${Math.min(e.target.scrollHeight, 116)}px`
  }

  const resetForm = async () => {
    await setState(INITIAL_STATE.current)
    await console.log(state)
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <div className='form-content'>
        <div className='info-container'>
          <h3 className='info-title'>Title & Description</h3>
          <div className='input-container'>
            <input
              type='text'
              id='title'
              name='name'
              value={state.name}
              onChange={handleChange}
              className='input'
              required
              autoComplete='off'
            />
            <label htmlFor='title' className='placeholder'>Card Title</label>
          </div>
          <div className='input-container' id='description-container'>
            <textarea
              id='description'
              name='description'
              value={state.description}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
              className='input'
              required
              autoComplete='off'
              placeholder='Enter description...'
            />
          </div>
        </div>
        <div className='tags-container'>
          <h3 className='tags-title'>Select tags</h3>
          <fieldset className='tags-fieldset'>
            <legend>
              Colors
            </legend>
            <ul className='tags-list'>
              <li className='tags-item'>
                <input
                  type='checkbox'
                  id='red-checkbox'
                  name='red'
                  onChange={handleTagsChange}
                />
              </li>
              <li className='tags-item'>
                <input
                  type='checkbox'
                  id='blue-checkbox'
                  name='blue'
                  onChange={handleTagsChange}
                />
              </li>
              <li className='tags-item'>
                <input
                  type='checkbox'
                  id='green-checkbox'
                  name='green'
                  onChange={handleTagsChange}
                />
              </li>
            </ul>
          </fieldset>
        </div>
        <div className='date-container'>
          <h3 className='date-title'>Enter deadline</h3>
          <div className='input-container'>
            <input
              type='date'
              id='date'
              name='date'
              value={state.date}
              onChange={handleChange}
              className='input'
              required
              autoComplete='off'
            />
            <label htmlFor='date' className='placeholder'>Enter Date</label>
          </div>
          <div className='input-container'>
            <input
              type='time'
              id='time'
              name='time'
              value={state.time}
              onChange={handleChange}
              className='input'
              required
              autoComplete='off'
            />
            <label htmlFor='time' className='placeholder'>Time</label>
          </div>
        </div>
      </div>
      <div className='btn-container'>
        <button className='btn' type='submit'>{sendingCard ? 'Sending...' : 'Add Card'}</button>
      </div>
      <div className='btn-container'>
        <button className='btn' type='button' onClick={resetForm}>Reset</button>
      </div>
    </form>
  )
}

Form.propTypes = {
  setCards: PropTypes.func
}
