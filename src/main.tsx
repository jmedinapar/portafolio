import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.tsx'

import ReactGA from 'react-ga4'

ReactGA.initialize(import.meta.env.VITE_GA_ID)
ReactGA.send('pageview')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

