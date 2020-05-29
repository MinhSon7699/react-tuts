import React, { Component } from 'react';
import './App.css';

import Accordion from './components/Accordion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion heading="Heading">
          Khó vãi cứt 
        </Accordion>
      </div>
    );
  }
}
//mỗi component trong react đều có props,
//truyền props là truyền data từ bên ngoài vào
export default App;
