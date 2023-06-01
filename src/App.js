import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Nav';
import Footer from './components/Footer';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import About from './pages/About';
import TechStack from './pages/TechStack';
import Education from './pages/Education';

function App() {
  const [pageSelected, setPageSelected] = useState('about');

  useEffect(() => {
    const page = window.location.href.split("#")[1]
    page && setPageSelected(page)
  }, [])
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
      <main>
        {(pageSelected === 'about') && (<About></About>)}
        {(pageSelected === 'education') && (<Education></Education>)}
        {(pageSelected === 'tech-stack') && (<TechStack></TechStack>)}
        {(pageSelected === 'portfolio') && (<Project></Project>)}
        {(pageSelected === 'contact') && (<Contact></Contact>)}
        {(pageSelected === 'resume') && (<Resume></Resume>)}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
