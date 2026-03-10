import React from 'react'
import './App.css'  
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Service from './Service/Service';


function App (){
  return (<div className ="App">
    <Navbar />
    <main>
      <Hero />
      <Service />
    </main>
  </div>
  )
}
  

export default App

