import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import More from './More';
import Registration from './Registration';
import Statistics from './Statistics';
import TracksPage from './TracksPage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/more" component={More} />
      <Route path="/registrations" component={Registration} />
      <Route path="/statistics" component={Statistics} />
      <Route path="/tracks" component={TracksPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
