import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
import ucsb from '../assets/images/education/ucsb.jpg'
import ucd from '../assets/images/education/ucd.jpg'

function Education() {
  return (
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <Card >
            <a href='https://www.ucsb.edu/' target="_blank">
              <Card.Img variant='top' src={ucsb} />
              <Card.ImgOverlay>
                <Card.Title className='text-white'>University of California: Santa Barbara</Card.Title>
              </Card.ImgOverlay>
            </a>
            <Card.Text>Bachelor of Arts in Linguistics</Card.Text>
          </Card>
        </Col>

        <Col sm={12} md={6}>
          <Card >
            <a href='https://www.ucdavis.edu/' target="_blank">
              <Card.Img variant='top' src={ucd} />
              <Card.ImgOverlay>
                <Card.Title className='text-black'>University of California: Davis</Card.Title>
              </Card.ImgOverlay>
            </a>
            <Card.Text>Certificate in Full Stack Web Development: My final project at UC Davis was an application that I collaborated on with a few other students. As the project leader, I was involved in every process previously listed. First, I presented the project idea to my teammates and wrote out a User Story. We came up with a wireframe together, designing the page layouts, colors, fonts, and user flow. Then, I used the GitHub projects feature to assign issues to each member of the team. I engineered the entire backend, including the server, schema, models, and seeds. Testing was also a large group effort, with every member testing every stage in the process. Finally, once the functional requirements were met, the application was deployed.</Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Education