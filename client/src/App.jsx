import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import StoryPage from './pages/StoryPage'
import './font/TravelingTypewriter.ttf'; 
function App() {
  return (
  <BrowserRouter>

    <main>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="portfolio" element={<Portfolio />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="portfolio/:story" element={<StoryPage />}/> 
      </Routes>
    </main>

  </BrowserRouter>
  
  )
}

export default App;
