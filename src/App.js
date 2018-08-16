import React, { Component } from 'react';
import Note from './Note';

class App extends Component {
  render() {
    return (
      <div className="App">
        A Todo App 
        <Note/>
      </div>
    );
  }
}

export default App;