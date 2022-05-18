import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

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


    
    //tl.from('header', { duration: 0.6, ease: 'power2. out', y: -60 })    
    const headerRef = useRef();
    useEffect(() => {
        let tl = gsap.timeline({delay: 1});
        tl.from(headerRef.current, { duration: 0.6, ease: 'power2. out', y: -60, opacity: 0 })
    }, [])

    return (
        <div>
            
            <h1 ref={headerRef} style={{color: activeColorA, fontSize: 40, marginBottom: 20, fontFamily: 'sans-serif', opacity: 100}}>SCHMIDDI CLICKER</h1>
            
        </div>
    )
}

export default Header