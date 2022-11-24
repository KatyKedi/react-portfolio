import React from 'react';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer() {
    return (
        <footer className='text-light'>
            <h2>Professional Profiles</h2>
            <ul>
                <li>Github: <Button href="https://github.com/KatyKedi" target='_blank'>KatyKedi</Button></li>
                <li>LinkedIn: <Button href="https://www.linkedin.com/in/katy-vincent-95a7351a7/" target="_blank">Katy Vincent</Button></li>
            </ul>
        </footer>
    );
};

export default Footer;