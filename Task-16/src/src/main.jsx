import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { DataProvider } from './globalData/DataProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>      
      <App />
    </DataProvider>
  </React.StrictMode>,
)
