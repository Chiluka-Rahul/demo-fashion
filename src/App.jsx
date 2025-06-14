import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import './assets/Fonts/font.css';
import Hero from './components/Hero/Hero';
import Collections from './components/Collections/Collections';
import Gallery from './components/Gallery/gallery';
import Lenis from 'lenis';
import Productsgallery from './components/Productsgallery/Productsgallery';
import Contact from './components/Contact/Contact';

function App() {
  useEffect( () => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <>
    <BrowserRouter>
      <Hero />
      <Collections />
      <Gallery />
      <Productsgallery />
      <Contact />
    </BrowserRouter>
    </>
  )
}

export default App
