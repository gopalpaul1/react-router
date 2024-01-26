// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='flex flex-row justify-center text-purple-700 font-bold text-2xl'>
            <Link className='pr-4' to='/'>Home</Link>
            <Link className='pr-4' to='/about'>About</Link>
            <Link className='pr-4' to='/Post'>Post</Link>
            <Link className='pr-4' to='/contact'>Contact</Link>
        </nav>
    );
};

export default Header;