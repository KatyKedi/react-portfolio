import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Nav';
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
      <Navigation setPageSelected={setPageSelected} />
      <main className='text-dark'>
        {(pageSelected === 'about') && (
          <Container id='about'>
            <Row>About Me</Row>
            <Row id='about-ps'>
              <Col>I'm an aspiring Computational Linguist, and I am hoping to find some great programmers to learn from and collaborate with as I work on gaining real world coding experience. In fall of 2022, I will have started at City University of New York pursuing an MA in Computational Linguistics.</Col>
              <Col>As a side project, I am currently working on an application called Ebay Buddy. This application started as a way for my mom to organize the items she sells on Ebay in her warehouse to make the selling process more efficient.</Col>
              <Col>In my spare time, I am studying Turkish and Spanish to build on what I have learned of those languages in the past. I also had years of ASL experience in the past that I want to revisit to become fluent again. Please feel free to contact me if you are also learning these languages and would like a partner to practice with!</Col>
            </Row>
          </Container>
        )}
        {(pageSelected === 'portfolio') && (
          <Container id='portfolio'>
            <Row>Portfolio</Row>
            <Row>
              <Project></Project>
            </Row>
          </Container>
        )}
        {(pageSelected === 'contact') && (
          <Container id='contact'>
            <Row>Contact Me</Row>
            <Contact></Contact>
          </Container>
        )}
        {(pageSelected === 'resume') && (
          <Container id='resume'>
            <Row>Resume</Row>
            <Resume></Resume>
          </Container>
        )}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
