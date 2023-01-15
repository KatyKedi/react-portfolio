import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {
    return (
        <Container>
            <Row>
                <Col><a href='https://github.com/KatyKedi' target='_blank'><FaGithub className='text-primary'/></a></Col>
                <Col><a href='https://www.linkedin.com/in/katy-vincent-95a7351a7/' target='_blank'><FaLinkedin className='text-primary'/></a></Col>
            </Row>
        </Container>
    );
};

export default Footer;