import React from 'react';
import DoCalculation from './components/calculator.js';
import './App.css';
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DoCalculation />
      </div>
    );
  }
}

export default App;
