import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  )
}

export default App