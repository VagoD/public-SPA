import React from 'react';
import logo from '../assets/paw_logo.png';
import './Header.css';

export const Header = () => {
    return (
        <header className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <div className='app-title'>
                My basic SPA project!
            </div>
        </header>
    )
}