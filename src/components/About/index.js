import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

function About() {
    return (
        <Container id='about-me'>
            <Row id='about-ps'>
                <Col>I'm an aspiring Computational Linguist, and I am hoping to find some great programmers to learn from and collaborate with as I work on gaining real world coding experience. In fall of 2022, I will have started at City University of New York pursuing an MA in Computational Linguistics.</Col>
                <Col>As a side project, I am currently working on an application called Ebay Buddy. This application started as a way for my mom to organize the items she sells on Ebay in her warehouse to make the selling process more efficient.</Col>
                <Col>In my spare time, I am studying Turkish and Spanish to build on what I have learned of those languages in the past. I also had years of ASL experience in the past that I want to revisit to become fluent again. Please feel free to contact me if you are also learning these languages and would like a partner to practice with!</Col>
            </Row>
        </Container>
    )
}

export default About