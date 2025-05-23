import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SiparisSistemiUI from './SiparisSistemiUI'
import Login from './Login'

function App() {
  const [kullanici, setKullanici] = useState(null)
  return (
    <React.StrictMode>
      {kullanici ? <SiparisSistemiUI kullanici={kullanici} /> : <Login onLogin={(k) => setKullanici(k)} />}
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
