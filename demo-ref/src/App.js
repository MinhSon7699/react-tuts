import React, { Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();// Ref tham chiếu  
  }
  
  componentDidMount(){
    this.inputElement.current.focus();
  }

  render(){
    return (
      <div className="App"> 
        <input type="text" ref={this.inputElement} />
      </div>
    );
  }  
}
// gán tham chiếu vào item thông qua thuộc tính ref
export default App;
