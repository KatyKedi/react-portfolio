import React, { useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../scss/custom.scss';
import avatar from '../../assets/avatar.png';

function Navigation(props) {
    const {
        pageSelected,
        setPageSelected
    } = props;

    useEffect(() => {
        document.querySelector(`#${pageSelected}`).classList.add('bg-primary')
    }, [pageSelected])

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
                        <Nav.Link id='about' className='rounded big-link text-light' href="#about" onClick={() => setPageSelected('about')}>
                            About me
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link id='portfolio' className='rounded big-link text-light' href="#portfolio" onClick={() => setPageSelected('portfolio')}>
                            Portfolio
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link id='contact' className='rounded big-link text-light' href="#contact" onClick={() => setPageSelected('contact')}>
                            Contact Me
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link id='resume' className='rounded big-link text-light' href="#resume" onClick={() => setPageSelected('resume')}>
                            Resume
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;