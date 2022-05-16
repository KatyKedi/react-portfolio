import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  const [pageSelected, setPageSelected] = useState('about');
  const projects = [
    {
      name: 'Project',
      img: './assets/img.png',
      description: 'This is a project'
    },
    {
      name: 'Project',
      img: './assets/img.png',
      description: 'This is a project'
    },
    {
      name: 'Project',
      img: './assets/img.png',
      description: 'This is a project'
    },
    {
      name: 'Project',
      img: './assets/img.png',
      description: 'This is a project'
    },
    {
      name: 'Project',
      img: './assets/img.png',
      description: 'This is a project'
    },
    {
      name: 'Project',
      img: './assets/img.png',
      description: 'This is a project'
    }
  ];
  
  return (
    <>
      <Header
        setPageSelected={setPageSelected}
      ></Header>
      <main>
        {(pageSelected === 'about') && (
          <div id='about'>
            <h2>About Me</h2>
            <p>I'm an aspiring computational linguist, and I am hoping to find some great programmers to learn from and collaborate with as I work on gaining real world coding experience. Right now, I'm looking into graduate school and trying to decide on a university that has a strong computational focus. I'm open to any advice and suggestions!</p>
          </div>
        )}
        {(pageSelected === 'portfolio') && (
            <div id='portfolio'>
              <h2>Portfolio</h2>
              <Project></Project>
            </div>
        )}
        {(pageSelected === 'contact') && (
          <Contact></Contact>
        )}
        {(pageSelected === 'resume') && (
          <div id='resume'>
              <h2>Resume</h2>
              <ul>Skills
                <li>Analytical skills in phonetics, phonology, morphology, syntax, and historical linguistics.</li>
                <li>Skills in HTML/CSS, JavaScript, Python, ELAN, Praat, and Rezonator</li>
              </ul>
              <ul>Research History
                <li>Worked under the direction of graduate student Jordan Douglas-Tavani and transcribed works of a field linguist into the international phonetic alphabet</li>
                <li>Worked under the direction of graduate student Chadi Ben Youssef and used ELAN to transcribe chunks of audio data in English, including notes accounting for pauses and intonation</li>
              </ul>
              <ul>Education
                <li>Coding Bootcamp: University of California, Davis | In progress</li>
                <li>Bachelor of Arts: Linguistics | GPA: 3.83 | University of California, Santa Barbara | Santa Barbara, CA | June 2020</li>
                <li>Associate of Arts: Language Studies | GPA: 3.71 | American River College | Sacramento, CA | June 2018</li>
              </ul>
          </div>
        )}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
