import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import image1 from '../assets/images/projects/code-quiz.png';
import image2 from '../assets/images/projects/workday-scheduler.png';
import image3 from '../assets/images/projects/cryptoloops.png';
import image4 from '../assets/images/projects/budget-tracker.png';

const projects = [
  {
    title: 'Code Quiz',
    img: image1,
    description: 'An app that lets you take a quiz to test your coding knowledge.',
    link: 'https://katykedi.github.io/code-quiz/',
    repo: 'https://github.com/KatyKedi/code-quiz'
  },
  {
    title: 'Workday Scheduler',
    img: image2,
    description: 'An app that helps you track your schedule by the hour each day.',
    link: 'https://katykedi.github.io/workday-scheduler/',
    repo: 'https://github.com/KatyKedi/workday-scheduler'
  },
  {
    title: 'CryptoLoops',
    img: image3,
    description: 'A landing page for an application called Cryptoloops',
    link: 'https://cryptoloops.netlify.app/',
    repo: 'https://github.com/KatyKedi/note-taker'
  },
  // {
  //   title: 'Budget Tracker',
  //   img: image4,
  //   description: 'An app that lets you take a quiz to test your coding knowledge.',
  //   link: 'https://budget-tracker-katykedi.herokuapp.com/',
  //   repo: 'https://github.com/KatyKedi/budget-tracker'
  // },
  // {
  //   title: 'Apex Losers',
  //   img: image5,
  //   description: 'An app that lets you take a quiz to test your coding knowledge.',
  //   link: 'https://github.com/KatyKedi/apex-losers',
  //   repo: 'https://github.com/KatyKedi/apex-losers'
  // },
  // {
  //   title: 'TFT Compare',
  //   img: image6,
  //   description: 'An app that lets you take a quiz to test your coding knowledge.',
  //   link: 'https://tft-compare.herokuapp.com/',
  //   repo: 'https://github.com/Atweaver7/tft-compare'
  // }
];

function Project() {
  return (
    <Container>
      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col lg={4} md={6} className='my-2' key={index}>
            <Card>
              <Card.Img
                variant="top"
                src={project.img}
                alt={project.title + ' image'}
                onClick={() => window.open(project.link)}
                key={index}
              >
              </Card.Img>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button className='text-light mx-2' variant="primary" href={project.repo} target="_blank">Repo</Button>
                <Button className='text-light' variant="primary" href={project.link} target="_blank">Deployment</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Project;