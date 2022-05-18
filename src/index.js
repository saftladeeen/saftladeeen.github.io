import React from 'react';
import ReactDOM from 'react-dom';


import Header from './components/header.js'
import './index.css'
import Main from './components/Main.js'
import SchmiddiClicker from './components/schmiddiClicker'

ReactDOM.render(
  
  <div className='wrapper'>
      <div>
        <SchmiddiClicker/>
      </div>
  </div>,
  
  document.getElementById('root')
);

