import React from 'react'
import './App.css'  
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Service from './Service/Service';
import Service1 from './Service1/Service1';
import Service2 from './Service2/Service2';
import Portfolio from './Portfolio/Portfolio';
import Features from './Features/Features'


function App (){
  return (<div className ="App">
    <Navbar />
    <main>
      <Hero />
      <Service />
      <Service1/>
      <Service2/>
      <Portfolio/>
      <Features/>
    </main>
  </div>
  )
}
  

export default App

