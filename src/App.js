import React from 'react';
import './App.css';
import { Header, Footer, Project } from './components';

function App() {
  return (
    <>
      <Header></Header>
      <main>
        {aboutSelected && (
          <div>
            <h2>About Me</h2>
            <p>I'm an aspiring computational linguist, and I am hoping to find some great programmers to learn from and collaborate with as I work on gaining real world coding experience. Right now, I'm looking into graduate school and trying to decide on a university that has a strong computational focus. I'm open to any advice and suggestions!</p>
          </div>
        )}
        {portfolioSelected && (
          <div>
            <h2>Portfolio</h2>
            <Project></Project>
          </div>
        )}
        {contactSelected && (
          <div>
            <h2>Contact Me</h2>
          </div>
        )}
        {resumeSelected && (
          <div>
            <h2>Resume</h2>
          </div>
        )}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
