import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import SchmiddiClicker from './components/schmiddiClicker'

import Video from './components/test'

ReactDOM.render(
  
  <div className='wrapper'>
      <div>
        <SchmiddiClicker/>
      </div>
  </div>,
  
  document.getElementById('root')
);

/*ReactDOM.render(
  <div>
    <Video/>
  </div>, document.getElementById('root')
);
*/
