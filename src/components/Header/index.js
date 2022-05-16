import React, { useEffect, useState } from 'react';
import Nav from '../Nav/index';

function Header(props) {
    const {
        setPageSelected
    } = props;
    return (
        <header>
            <h1>Katy Vincent</h1>
            <Nav
                setPageSelected={setPageSelected}
            ></Nav>
        </header>
    );
}

export default Header;