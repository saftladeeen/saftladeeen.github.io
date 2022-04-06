import React from 'react';
import ReactDOM from 'react-dom';


import Header from './components/header.js'
import './index.css'
import Main from './components/Main.js'


ReactDOM.render(
  
  <div className='wrapper'>
      <div>
        <Header/>
        <Main className='main'/>
      </div>
  </div>,
  
  document.getElementById('root')
);

