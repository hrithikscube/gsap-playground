import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ScaleAnimation from './components/pages/ScaleAnimation'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ScaleAnimation />} />
    </Routes>
  )
}

export default App