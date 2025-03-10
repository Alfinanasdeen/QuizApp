import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './QuizApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
