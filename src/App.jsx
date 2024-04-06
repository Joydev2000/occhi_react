import React from 'react'
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Marque from './Components/Marque';
import About from './Components/About';
import Eyes from './Components/Eyes';


function App() {
  return (
    <div className="main w-full  bg-black">
      <Navbar />
      <Landing />
      <Marque/>
      <About />
      <Eyes />

    </div>
  )
}

export default App