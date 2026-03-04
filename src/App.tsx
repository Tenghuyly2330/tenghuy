// import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './i18n'
import { useTranslation } from 'react-i18next'
import Packages from './pages/Packages'
import Articles from './pages/Articles'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {

  const { i18n } = useTranslation();
  const fontClass = i18n.language === "km" ? "font-khmer" : "font-en";

  return (
    <div className={`${fontClass} bg-white dark:bg-[#0b0b0b] min-h-screen`}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
