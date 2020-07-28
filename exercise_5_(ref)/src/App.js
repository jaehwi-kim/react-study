import React, { Component } from 'react';
import ValidationSample from './ValidationSample';
import RefSample from './RefSample';
import ScrollBox from './ScrollBox';
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref}></ScrollBox>
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
        <ValidationSample></ValidationSample>
        <RefSample></RefSample>
      </div>
    )
  }
}

export default App;
