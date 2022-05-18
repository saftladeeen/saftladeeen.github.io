import React, { useState } from 'react';
import './startscreen.css'
import Main from './Main.js';
import Header from './header.js';

const logo = require('./schmiddiclickerlogo.png')

export default function SchmiddiClicker() {
    
    const [aktiv, setAktiv] = useState(false);
    
    function starten() {
        setAktiv(true);
    }

    //für abrombus

    window.addEventListener('beforeunload', function (e) {
        var x = '';
        (e || this.window.event).returnValue = x;
        return x;
    })


    
    if(!aktiv) {
        return (
            
            <div>
                <div className='wrapperStartscreen'>
                    <h1 className='mainText'>Schmiddi <br/>Clicker</h1>
                    <div className='spielenKnopf' onClick={starten}>
                        <p className='knopfText'>Starten</p>
                    </div>
                </div>
                <img className='mainImg' src={logo} alt='Schmiddi Clicker logo'/>
            </div> 
        )
    } else {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        )
    }
}