import React from 'react';

import './sukadev.css'
//const video = require('./sukadev.mp4')

function Video() {
    return (
        <div className='sukadevdiv'>
          <video  controls autplay className='video'>
      <source src={require('../assets/sukadev.mp4')} type="video/mp4"/>
     </video>
     <h1>servus herr schwarz hier is der sukadev!</h1>
        </div>
    )
}

export default Video;