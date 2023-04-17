import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import CustomProvider from './components/Context';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <CustomProvider>
      <App />
    </CustomProvider>
  </BrowserRouter>
  
)
