import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/custom.scss';
import avatar from '../assets/images/profile/avatar.png';

function Navigation(props) {
    const {
        pageSelected,
        setPageSelected
    } = props;

    return (
        <Navbar className='mx-3' collapseOnSelect expand="lg">
            <Navbar.Brand className='text-light d-flex align-items-center flex-column flex-md-row' id='name-title'>
                <img
                    width='70'
                    height='70'
                    src={avatar}
                    alt={`Katy coding avatar`}>
                </img>
                <h1 className='mx-2'>Katy Vincent</h1>
            </Navbar.Brand>
            <Navbar.Toggle className='bg-primary' aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Item>
                        <Nav.Link id='about' className={`${pageSelected === 'about' && "bg-primary"} rounded big-link text-light`} href="#about" onClick={() => setPageSelected('about')}>
                            About Me
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link id='education' className={`${pageSelected === 'education' && "bg-primary"} rounded big-link text-light`} href="#education" onClick={() => setPageSelected('education')}>
                            Education
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link id='tech-stack' className={`${pageSelected === 'tech-stack' && "bg-primary"} rounded big-link text-light`} href="#tech-stack" onClick={() => setPageSelected('tech-stack')}>
                            Tech Stack
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link id='portfolio' className={`${pageSelected === 'portfolio' && "bg-primary"} rounded big-link text-light`} href="#portfolio" onClick={() => setPageSelected('portfolio')}>
                            Portfolio
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link id='contact' className={`${pageSelected === 'contact' && "bg-primary"} rounded big-link text-light`} href="#contact" onClick={() => setPageSelected('contact')}>
                            Contact Me
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link id='resume' className={`${pageSelected === 'resume' && "bg-primary"} rounded big-link text-light`} href="#resume" onClick={() => setPageSelected('resume')}>
                            Resume
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;