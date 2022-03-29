import React, { Component } from 'react';
import ReactDOM from "react-dom";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: false
    }
    this.createText = this.createText.bind(this);
  }


  createText() {
    this.setState({ isShow: true }) 
  }


  render() {
    return (
      <div className="App">
        <button id='click' onClick={this.createText}>Click</button>
        {this.state.isShow && <p id='para'>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
export default App;
