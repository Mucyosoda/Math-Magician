import { Switch, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Header from './components/Header';
import Quote from './components/QuotePage';
import Welcome from './components/Welcome';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Welcome />
      </Route>
      <Route path="/calculator">
        <Calculator />
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>
    </Switch>
  </>
);

export default App;
