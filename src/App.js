import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import Contact from './components/Contact';

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
            <p>I'm an aspiring computational linguist, and I am hoping to find some great programmers to learn from and collaborate with as I work on gaining real world coding experience. Right now, I'm looking into graduate school and trying to decide on a university that has a strong computational focus. I'm open to any advice and suggestions!</p>
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
              <ul>Skills
                <li className='resume-li'><i class="fa-solid fa-laptop-code"></i><p className='resume-p'>Analytical skills in phonetics, phonology, morphology, syntax, and historical linguistics.</p></li>
                <li className='resume-li'><i class="fa-solid fa-laptop-code"></i><p className='resume-p'>Skills in HTML/CSS, JavaScript, Python, ELAN, Praat, and Rezonator</p></li>
              </ul>
              <ul>Research History
                <li className='resume-li'><i class="fa-solid fa-book"></i><p className='resume-p'>Worked under the direction of graduate student Jordan Douglas-Tavani and transcribed works of a field linguist into the international phonetic alphabet</p></li>
                <li className='resume-li'><i class="fa-solid fa-book"></i><p className='resume-p'>Worked under the direction of graduate student Chadi Ben Youssef and used ELAN to transcribe chunks of audio data in English, including notes accounting for pauses and intonation</p></li>
              </ul>
              <ul>Education
                <li className='resume-li'><i class="fa-solid fa-graduation-cap"></i>
                  <ul className='education'>Coding Bootcamp 
                    <li>University of California, Davis</li>
                    <li>June 2022</li>
                  </ul>
                </li>
                <li className='resume-li'><i class="fa-solid fa-graduation-cap"></i>
                  <ul className='education'>Bachelor of Arts: Linguistics
                    <li>GPA: 3.83</li>
                    <li>University of California, Santa Barbara</li>
                    <li>June 2020</li>
                  </ul>
                </li>
                <li className='resume-li'><i class="fa-solid fa-graduation-cap"></i>
                  <ul className='education'>Associate of Arts: Language Studies
                   <li>GPA: 3.71</li>
                   <li>American River College, Sacramento, CA</li>
                   <li>June 2018</li>
                  </ul>
                </li>
              </ul>
          </div>
        )}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
