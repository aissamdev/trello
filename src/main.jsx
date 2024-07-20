import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ModalProvider } from './contexts/ModalContext.jsx'
import { BoardsProvider } from './contexts/BoardsContext.jsx'
import { CardsProvider } from './contexts/CardsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BoardsProvider>
    <CardsProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </CardsProvider>
  </BoardsProvider>
)
