import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/about/About'
import Home from './pages/home/home'
import Plans from './pages/plans/plans'
import Trainers from './pages/trainers/trainers'
import Contact from './pages/contact/contact'
import Gallery from './pages/gallery/gallery'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route index element={<Home/>}/>
        <Route path="about"  element={<About/>}/>
        <Route path="contact"  element={<Contact/>}/>
        <Route path="gallery"  element={<Gallery/>}/>
        <Route path="plans"  element={<Plans/>}/>
        <Route path="trainers"  element={<Trainers/>}/>
        <Route path="*"  element={<NotFound/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
