import React from 'react'
import ReactDOM from 'react-dom/client'
import Vowels from "./Vowels";
import './index.css'
import './js/getMusic.js'

ReactDOM.createRoot(document.getElementById('vowelsLevel')).render(
    <React.StrictMode>
      <Vowels />
    </React.StrictMode>,
  )