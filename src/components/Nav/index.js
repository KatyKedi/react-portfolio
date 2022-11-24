import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import avatar from '../../assets/avatar.png';

function Navigation(props) {
    const {
        setPageSelected
    } = props;

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand className='text-light' id='name-title' href="#about" onClick={() => setPageSelected('about')}>
                    <img 
                    width='80'
                    height='80'
                    src={avatar} 
                    alt='avatar'>
                    </img>
                    {'     '}Katy Vincent
                </Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Nav.Link className='m-1 p-0 rounded big-link text-light' href="#about" onClick={() => setPageSelected('about')}>
                            About me
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='m-1 p-0 rounded big-link text-light' href="#portfolio" onClick={() => setPageSelected('portfolio')}>
                            Portfolio
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='m-1 p-0 rounded big-link text-light' href="#contact" onClick={() => setPageSelected('contact')}>
                            Contact Me
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='m-1 p-0 rounded big-link text-light' href="#resume" onClick={() => setPageSelected('resume')}>
                            Resume
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;