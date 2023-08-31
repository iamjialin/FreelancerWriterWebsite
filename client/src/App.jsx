import './App.css'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
function App() {
  return (
  <BrowserRouter>

    <main>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="portfolio" element={<Portfolio />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
      </Routes>
    </main>

  </BrowserRouter>
  
  )
}

export default App
