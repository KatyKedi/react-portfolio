import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';

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
      <Header
        setPageSelected={setPageSelected}
      ></Header>
      <main>
        {(pageSelected === 'about') && (
          <div className='page-div' id='about'>
            <h2 >About Me</h2>
            <div id='about-ps'>
              <p>I'm an aspiring Computational Linguist, and I am hoping to find some great programmers to learn from and collaborate with as I work on gaining real world coding experience. In fall of 2022, I will have started at City University of New York pursuing an MA in Computational Linguistics.</p>
              <p>As a side project, I am currently working on an application called Ebay Buddy. This application started as a way for my mom to organize the items she sells on Ebay in her warehouse to make the selling process more efficient.</p>
              <p>In my spare time, I am studying Turkish and Spanish to build on what I have learned of those languages in the past. I also had years of ASL experience in the past that I want to revisit to become fluent again. Please feel free to contact me if you are also learning these languages and would like a partner to practice with!</p>
            </div>
          </div>
        )}
        {(pageSelected === 'portfolio') && (
            <div className='page-div' id='portfolio'>
              <h2>Portfolio</h2>
              <Project></Project>
            </div>
        )}
        {(pageSelected === 'contact') && (
          <div className='page-div' id='contact'>
            <h2>Contact Me</h2>
            <Contact></Contact>
          </div>
        )}
        {(pageSelected === 'resume') && (
          <div className='page-div' id='resume'>
              <h2>Resume</h2>
              <Resume></Resume>
          </div>
        )}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
