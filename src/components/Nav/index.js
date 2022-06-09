import React from 'react';

function Nav(props) {
    const {
        setPageSelected
    } = props;

    return (
        <nav>
            <ul>
                <li>
                    <a className='button' href="#about" onClick={() => setPageSelected('about')}>
                        About me
                    </a>
                </li>
                <li>
                    <a className='button' href="#portfolio" onClick={() => setPageSelected('portfolio')}>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a className='button' href="#contact" onClick={() => setPageSelected('contact')}>
                        Contact Me
                    </a>
                </li>
                <li>
                    <a className='button' href="#resume" onClick={() => setPageSelected('resume')}>
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;