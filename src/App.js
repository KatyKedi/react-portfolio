import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Nav';
import Footer from './components/Footer';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import About from './components/About'

function App() {
  const [pageSelected, setPageSelected] = useState('about');

  return (
    <>
      <div class='light x1'></div>
      <div class='light x2'></div>
      <div class='light x3'></div>
      <div class='light x4'></div>
      <div class='light x5'></div>
      <div class='light x6'></div>
      <div class='light x7'></div>
      <div class='light x8'></div>
      <div class='light x9'></div>
      <Navigation pageSelected={pageSelected} setPageSelected={setPageSelected} />
      <main className='text-dark'>
        {(pageSelected === 'about') && (<About></About>)}
        {(pageSelected === 'portfolio') && (<Project></Project>)}
        {(pageSelected === 'contact') && (<Contact></Contact>)}
        {(pageSelected === 'resume') && (<Resume></Resume>)}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
