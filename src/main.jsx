import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 1. IMPORT BOOTSTRAP FIRST
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'


// 2. IMPORT YOUR CUSTOM CSS AFTER BOOTSTRAP
import './index.css'

import App from './App.jsx'
import { ThemeProvider } from './Contexts/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
)