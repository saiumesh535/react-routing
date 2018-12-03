import React, { Component, Suspense } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Left from './components/left';
import Main from './components/main';

const RightCoomponent = React.lazy(() => import('./components/right'));

class App extends Component {
  state = {
    count: 0,
  }

  addCounter = () => {
    this.setState({
      count : this.state.count + 1,
    })
  }

  render() {
    return (
      <div className="App">
        <p>Hey!! count {this.state.count}  </p>
        <Left />
        {this.state.count > 4 &&
          <Suspense fallback={<div>Loading...</div>}>
            <RightCoomponent />
          </Suspense>}
        <button onClick={this.addCounter} >Add</button>
        <p>Routing starts Here</p>
        <BrowserRouter >
          <Main />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
