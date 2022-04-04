import React, { useState, useEffect } from 'react';

function randomInt(maxVal) {
    return Math.floor(Math.random() * maxVal)
}

function Header() {
    
    //const [activeColor, setActiveColor] = useState(true)
    //let colors = ['blue', 'green', 'pink', 'yellow', 'red'];
    const [activeColorA, setActiveColorA] = useState('#001eff')
    let colors = ['#4deeea', '#74ee15', '#ffe700', '#f000ff', '#001eff'];
    
    /*function activeColorSetter() {
        if(activeColor) {
            setActiveColor(false);
        } else {
            setActiveColor(true);
        }
    }
    */
    /*useEffect(() => {
        const interval = setInterval(() => {
          
          activeColorSetter()
          
        }, 1000);
        return () => clearInterval(interval);
        }, comment [] comment);
    */
    
    function setRandomColor() {
        setActiveColorA(colors[randomInt(5)])
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
          
          setRandomColor();
          
        }, 1000);
        return () => clearInterval(interval);
        }/*, [] */);


    return (
        <div>
            
            <h1 style={{color: activeColorA, fontSize: 40, marginBottom: 20, fontFamily: 'sans-serif'}}>SCHMIDDI CLICKER</h1>
            
        </div>
    )
}

export default Header