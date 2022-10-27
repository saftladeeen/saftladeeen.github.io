import React, { useState } from 'react';
import './startscreen.css'
import Main from './Main.js';
import Header from './header.js';
import Glücksrad from './glücksrad.js';
import Video from './test.js'
const logo = require('./schmiddiclickerlogo.png')

export default function SchmiddiClicker() {
    
    const [aktiv, setAktiv] = useState(1);
    
    function starten() {
        setAktiv(2);
    }

    //für abrombus
    const [suka, setSuka] = useState(false);
    function sukadev() {
        setAktiv(3)
    }

    window.addEventListener('beforeunload', function (e) {
        var x = '';
        (e || this.window.event).returnValue = x;
        return x;
    })

    document.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            starten();
        }
    })
    
    if(aktiv == 1) {
        return (
            
            <div>
                <div className='wrapperStartscreen'>
                    
                    <h1 className='mainText'>Schmiddi <br/>Clicker</h1>
                    <div className='spielenKnopf' onClick={starten}>
                        <p className='knopfText'>Starten</p>
                    </div>
                    <div className='spielenKnopf' onClick={sukadev}>
                        <p className='knopfText'>Sukadev</p>
                    </div>
                </div>
                <img className='mainImg' src={logo} alt='Schmiddi Clicker logo'/>
            </div> 
        )
    } else if(aktiv == 2) {
        return (
            <>
                <div>
                    <Header customFontSize={40}/>
                    <Main/>
                </div>
                
            </>
        )
    } else if(aktiv == 3) {
        return (
            <>
                <div>
                    <Video/>
                </div>
            </>
        )
    }

    
}