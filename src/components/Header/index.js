import React, { useEffect, useState } from 'react';
import Nav from '../Nav/index';
import avatar from '../../assets/avatar.png';

function Header(props) {
    const {
        setPageSelected
    } = props;
    return (
        <header>
            <Nav
                setPageSelected={setPageSelected}
            ></Nav>
            <div id='profile'>
                <h1 id="title">Katy Vincent</h1>
                <img src={avatar} alt='avatar'></img>
            </div>
        </header>
    );
}

export default Header;