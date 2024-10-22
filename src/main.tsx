import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { Fonts } from '@/components';
import { ColorModeScript } from '@chakra-ui/react';
import theme from './lib/theme'
import { AnimatePresence } from 'framer-motion';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Fonts />
    <BrowserRouter>
      <AnimatePresence mode="wait" initial={true}>
        <App />
      </AnimatePresence>
    </BrowserRouter>
  </StrictMode>,
)
