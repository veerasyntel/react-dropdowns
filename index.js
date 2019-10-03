import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import Dropdown from './Dropdown';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      displayMenu: false
    };
  }
  
  showDropdownMenu = () => {
    this.setState({displayMenu: !this.state.displayMenu});   
  };

  render() {
    const {displayMenu} = this.state;
    return (
      <div>
       <Dropdown 
          displayMenu={displayMenu}
          showDropdownMenu={this.showDropdownMenu}
        />       
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
