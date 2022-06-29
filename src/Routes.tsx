import Home from 'components/Home';
import Login from 'components/Login';
import RedocBanking from 'components/redoc-banking';
import RedocBass from 'components/redoc-bass';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from 'util/history';


const Routes = () => (
  <Router history = {history}>
    <Switch>
      <Route path="/"  exact>
      <Login />
      </Route>
      <Redirect from="/login" to="/home" exact />
      <Route path="/home" exact>
      <Home />
      </Route>
      <Route path="/api-bass" exact>
        <RedocBass />
      </Route>
      <Route path="/api-banking" exact>
        <RedocBanking />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
