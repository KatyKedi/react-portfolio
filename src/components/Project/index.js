import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import image1 from '../../assets/code-quiz.png';
import image2 from '../../assets/workday-scheduler.png';
import image3 from '../../assets/note-taker.png';
import image4 from '../../assets/budget-tracker.png';
import image5 from '../../assets/apex-losers.png';
import image6 from '../../assets/tft-compare.png';

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
      description: 'An app that lets you take a quiz to test your coding knowledge.',
      link: 'https://katykedi.github.io/workday-scheduler/',
      repo: 'https://github.com/KatyKedi/workday-scheduler'
    },
    {
      title: 'Note Taker',
      img: image3,
      description: 'An app that lets you take a quiz to test your coding knowledge.',
      link: 'https://note-taker-katykedi.herokuapp.com/',
      repo: 'https://github.com/KatyKedi/note-taker'
    },
    {
      title: 'Budget Tracker',
      img: image4,
      description: 'An app that lets you take a quiz to test your coding knowledge.',
      link: 'https://budget-tracker-katykedi.herokuapp.com/',
      repo: 'https://github.com/KatyKedi/budget-tracker'
    },
    {
      title: 'Apex Losers',
      img: image5,
      description: 'An app that lets you take a quiz to test your coding knowledge.',
      link: 'https://github.com/KatyKedi/apex-losers',
      repo: 'https://github.com/KatyKedi/apex-losers'
    },
    {
      title: 'TFT Compare',
      img: image6,
      description: 'An app that lets you take a quiz to test your coding knowledge.',
      link: 'https://tft-compare.herokuapp.com/',
      repo: 'https://github.com/Atweaver7/tft-compare'
    }
];

function Project() {
    return (
<Container>
  <Row>
        {projects.map((project, index) => (
          <Col lg={4} md={6} className='my-2' key={index}>
            <Card>
              <Card.Img 
                variant="top" 
                src={project.img}
                alt={project.title + ' image'}
                onClick={() =>  window.open(project.link)}
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