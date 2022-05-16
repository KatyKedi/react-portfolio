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
          </div>
        )}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
