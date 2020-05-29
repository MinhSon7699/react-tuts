import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import Tick from './img/tick.svg';

class App extends Component {
  constructor(){
    super();
    this.state = {
      newItems: '',
      todoItems: [
      { title: 'Đi về', isComplete: true },
      { title: 'Ăn cơm', isComplete: true},
      { title: 'Chơi game', isComplete: false}
    ]
  }
  this.onKeyUp = this.onKeyUp.bind(this);
  this.onChange = this.onChange.bind(this);
}

  onItemClicked(item){
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    };
  }

  onKeyUp(event) {    
    if(event.keyCode === 13){ //enter key 
      let text = event.target.value;
      if(!text) {
        return;
      }
      text = text.trim();
      if (!text) {return;}
      this.setState({
        newItems: '',
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems
        ]
      });
    } 
  }
  
  onChange(event){
    this.setState({
      newItems: event.target.value
    });
  }

  render(){
    const { todoItems, newItems } = this.state;
    if(todoItems.length){
      return (
        <div className="App">
          <div className="Header">
            <img src={Tick} width={32} height={32}/>
            <input 
              type="text" 
              placeholder="Thêm hàng zô" 
              value={newItems}
              onChange={this.onChange}
              onKeyUp={this.onKeyUp}/>
          </div>
          { todoItems.length && todoItems.map((item, index) => 
            <TodoItem 
              key={index}
              item={item} 
              onClick={this.onItemClicked(item)}/>
            )
          }
        </div>
      );
    } else {
      return (
        <div className="App">Đéo có gì ở đây</div>
      );
    }
  }
}

export default App;