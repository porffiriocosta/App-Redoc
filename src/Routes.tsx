import Home from 'components/Home';
import Redoc from 'components/Redoc';
import { Router, Switch, Route } from 'react-router-dom';
import history from 'util/history';
import Navbar from './components/Navbar';


const Routes = () => (
  <Router history = {history}>
    <Navbar />
    <Switch>
    <Route path="/" exact>
      <Home />
      </Route>
      <Route path="/api-bass" exact>
        <Redoc />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
