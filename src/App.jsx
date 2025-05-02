import React from 'react'
import './App.css'
import Header from './components/Header'
import UploadDesign from './components/UploadDesign'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <UploadDesign />
      </main>
      <Footer />
    </div>
  )
}

export default App
