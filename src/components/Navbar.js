import React from 'react';
import './Navbar.css';


function NavBar() {
    return (
        <div className='wrapper'>
            <div className='logo'>Saft</div>
            <div className='buttons'>
                <ul>
                    <li className='button'>x</li>
                    <li className='button'>x</li>
                    <li className='button' id='lastli'>x</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;