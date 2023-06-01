import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'

function Education() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Educational background</Card.Title>
                            <Card.Text>I attended UC Santa Barbara where I earned a Bachelor’s degree in Linguistics and UC Davis Continuing Education where I earned a Certificate in Full Stack Web Development. In my coursework, I worked on a plethora of individual projects as well as team projects. In these projects I engineered, designed, developed, tested and implemented new applications, modifications to existing applications and met functional requirements established for the user.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Professional Experience</Card.Title>
                            <Card.Text>Currently, I am employed as a Teaching Assistant for 2U Bootcamps, where I work with instructors to mentor and maintain a class of Web Development students. As a TA, I always ensure my assignments are completed in an accurate, effective and timely manner by following my instructor or manager’s guidelines. It is essential that students receive feedback on their work in a timely manner so they can apply the necessary changes to their future code. It is also absolutely necessary that I update the class repository accurately and timely, so that I don’t upload something I shouldn’t or delay the student’s access to the curriculum they need. Working with the material and helping students not only improves my ability to teach and train others, but also solidifies my own education. Every day in class, I learn something new from the instructor and even the students, broadening my knowledge and furthering my personal development.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Education