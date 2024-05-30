import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Video from './components/Video'
import Credits from './components/Credits'
import PageError from './components/PageError'

export default function App() {
  return <>
    <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/credits' element={<Credits />} />
        <Route path='/video' element={<Video />} />
        <Route path='/*' element={<PageError />} />
      </Routes>
  </>
}