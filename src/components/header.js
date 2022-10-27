import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function randomInt(max) {
    return Math.floor(Math.random() * max)
}

function Header(props) {
    

    const [activeColorA, setActiveColorA] = useState('#001eff')
    let colors = ['#4deeea', '#74ee15', '#ffe700', '#f000ff', '#001eff'];
    
    function setRandomColor() {
        setActiveColorA(colors[randomInt(5)])
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
          
          setRandomColor();
          
        }, 1000);
        return () => clearInterval(interval);
        }/*, [] */);


    

    const headerRef = useRef();
    useEffect(() => {
        let tl = gsap.timeline({delay: 1});
        tl.from(headerRef.current, { duration: 0.6, ease: 'power2. out', y: -60, opacity: 0 })
    }, [])

    return (
        <div>
            
            <h1 ref={headerRef} style={{textAlign: 'center', color: activeColorA, fontSize: props.customFontSize, marginBottom: 20, fontFamily: 'sans-serif', opacity: 100}}>SCHMIDDI CLICKER</h1>
            
        </div>
    )
}

export default Header