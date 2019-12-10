import React, { Component } from 'react';
import { render } from 'react-dom';
import Progresscard from './infocard/progress';

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      <Progresscard/>
       
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
