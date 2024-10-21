import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import Fonts from './components/fonts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Fonts />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
