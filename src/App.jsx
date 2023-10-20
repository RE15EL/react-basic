import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './pages/Layout.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { NotFound } from './pages/NotFound.jsx'

function App() {   

  return ( 
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
