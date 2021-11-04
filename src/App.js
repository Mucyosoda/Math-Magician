import React from 'react';
// eslint-disable-next-line import/extensions
import DoCalculation from './components/calculator';
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
