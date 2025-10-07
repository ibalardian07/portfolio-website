// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

// Bootstrap
import './assets/bootstrap-5.3.8-dist/css/bootstrap.min.css'
import './assets/bootstrap-5.3.8-dist/js/bootstrap.bundle.min.js'

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
)
