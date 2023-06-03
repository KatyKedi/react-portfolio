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
            <Card.Body>
              <Card.Title>Bachelor of Arts in Linguistics</Card.Title>
              <Card.Text className='about-text'>I was involved in two research projects during my time at UCSB. The first project was centered around analyzing speech from a radio talk show, specifically during segments with guests. The program I used to transcribe chunks of audio data was ELAN, with my transcriptions including notes accounting for pauses, intonation, and other parts of speech. The second project I contributed to required me to transcribe works of a field linguist into the international phonetic alphabet, in order to preserve and standardize their work. Both projects were quintessential in building my skills in the field and gaining practical experience working in research.</Card.Text>
            </Card.Body>
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
            <Card.Body>
              <Card.Title>Certificate in Full Stack Web Development</Card.Title>
              <Card.Text className='about-text'>My final project at UC Davis was an application that I collaborated on with a few other students. As the project leader, I was involved in every process previously listed. First, I presented the project idea to my teammates and wrote out a User Story. We came up with a wireframe together, designing the page layouts, colors, fonts, and user flow. Then, I used the GitHub projects feature to assign issues to each member of the team. I engineered the entire backend, including the server, schema, models, and seeds. Testing was also a large group effort, with every member testing every stage in the process. Finally, once the functional requirements were met, the application was deployed.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Education