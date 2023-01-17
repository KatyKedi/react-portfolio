import React from 'react';
import { Container, Accordion } from 'react-bootstrap'

function About() {
    return (
        <Container>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>My Story</Accordion.Header>
                    <Accordion.Body className='about-ps'>
                        I'm an aspiring Computational Linguist, and I am hoping to find some great programmers to learn from and collaborate with as I work on gaining real world coding experience. Over the past few years, I attended UC Santa Barbara where I earned a Bachelor’s degree in Linguistics and UC Davis Continuing Education where I earned a Certificate in Full Stack Web Development. In my coursework, I worked on a plethora of individual projects as well as team projects. In these projects I engineered, designed, developed, tested and implemented new applications, modifications to existing applications and met functional requirements established for the user.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Development Skills</Accordion.Header>
                    <Accordion.Body className='about-ps'>
                        From my studies at UC Santa Barbara and UC Davis, I have developed skills in Javascript, Visual Studio.Net, RESTful Web Services, and SQL, MySQL, Sequelize, MongoDB, Mongoose, GraphQL, Python, and Node.js. Packages I have expertise in for Node.js include the Express server and the testing framework Jest.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Other Interests</Accordion.Header>
                    <Accordion.Body className='about-ps'>
                        In my spare time, I am studying Turkish and Spanish to build on what I have learned of those languages in the past. I also had years of ASL experience in the past that I want to revisit to become fluent again. Please feel free to contact me if you are also learning these languages and would like a partner to practice with!
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}

export default About