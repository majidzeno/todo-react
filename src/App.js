import React, { Component } from 'react';
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>A Todo App </header>
        <List/>
      </div>
    );
  }
}

export default App;