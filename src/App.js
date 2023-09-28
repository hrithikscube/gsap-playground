import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Chat from './Chat'
import Temp from './Temp'
import ScaleAnimation from './components/pages/ScaleAnimation'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ScaleAnimation />} />
      <Route path="/temp" element={<Temp />} />
      <Route path="/demo" element={<ScaleAnimation />} />
    </Routes>
  )
}

export default App