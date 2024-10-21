import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToggleProvider } from './ContextApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleProvider>
       <App />
    </ToggleProvider>
  </StrictMode>,
)
