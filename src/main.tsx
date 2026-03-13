import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { ThemeProvider } from './shared/lib/theme/ThemeProvider';
import App from './app/App'
import './index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
