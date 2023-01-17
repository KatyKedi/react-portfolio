import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

function Footer() {
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col><a href='https://github.com/KatyKedi' target='_blank'><FaGithub className='h-75 w-75 text-primary'/></a></Col>
                <Col><a href='https://www.linkedin.com/in/katy-vincent-95a7351a7/' target='_blank'><FaLinkedin className='h-75 w-75 text-primary'/></a></Col>
                <Col><a href='mailto:katykat5bros@gmail.com' target='_blank'><HiOutlineMail className='h-75 w-75 text-primary'/></a></Col>
            </Row>
        </Container>
    );
};

export default Footer;