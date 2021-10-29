import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import Registration from './Registration';
import Statistics from './Statistics';
import TracksPage from './TracksPage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/tracks" component={TracksPage} />
      <Route path="/statistics" component={Statistics} />
      <Route path="/registrations" component={Registration} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
