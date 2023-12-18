import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './pages/LayoutPage/Layout.jsx'
import { Home } from './pages/HomePage/Home.jsx'
import { About } from './pages/AboutPage/About.jsx'
import { Dashboard } from './pages/DashboardPage/Dashboard.jsx'
import { NotFound } from './pages/NotFoundPage/NotFound.jsx'

function App() {   

  return ( 
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="context" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
