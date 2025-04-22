import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/login">Вход</Link>
            <Link to="/register">Регистрация</Link>
        </div>
    )
}

export default Navbar;
